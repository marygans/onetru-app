import * as functions from 'firebase-functions';

import {searchConfig} from '../config/search.config';
import {Search} from '../common/dtos/search.dto';
import {SearchMore} from '../common/dtos/searchMore.dto';
import {store} from '../index';

const onCreateCompany = functions.database
    .ref('companies/{companyId}')
    .onCreate((snapshot, context) => {
        const company = snapshot.val();
        const keywords = generateKeywords([company.address, company.city, company.zip]);
        return snapshot.ref.update({keywords: keywords});
    });
const onCreateCompanyInStore = functions.firestore
    .document('companies/{companyId}')
    .onCreate((snap, context) => {
        const company: any = snap.data();
        const keywords = generateKeywords([company.address.toLowerCase(), company.city.toLowerCase(), company.zip.toLowerCase()]);

        return snap.ref.set({keywords: keywords, ...company, id: snap.id});
    });

const createKeywords = (value: string) => {
    const arrName: string[] = [];
    let currName = '';

    value.split('').forEach(letter => {
        currName += letter;
        arrName.push(currName);
    });
    return arrName;
};

const generateKeywords = (findFields: string[]) => {
    const [address, city, zip] = findFields;
    const keywordsAddress = createKeywords(`${address} `);
    const keywordsCity = createKeywords(`${city} `);
    const keywordsZip = createKeywords(`${zip} `);
    const keywordsAddressWithCity = createKeywords(`${address} ${city}`);
    const keywordsAddressWithZip = createKeywords(`${address} ${zip}`);
    const keywordsCityWithZip = createKeywords(`${city} ${zip}`);
    const keywordsAddressWithCityAndZip = createKeywords(`${address} ${city} ${zip}`);

    return [
        ...new Set([
            '',
            ...keywordsAddress,
            ...keywordsCity,
            ...keywordsZip,
            ...keywordsAddressWithCity,
            ...keywordsAddressWithZip,
            ...keywordsAddressWithCityAndZip,
            ...keywordsCityWithZip,
        ])
    ];

};

const searchManagers = functions.https.onCall((data: Search, context: any) => {
    return new Promise(async (resolve, reject) => {
        try {
            const companies: any[] = [];
            store.collection('companies')
                .where('keywords', 'array-contains', data.search.toLowerCase())
                .orderBy('id')
                .limit(searchConfig.queryLimit)
                .get()
                .then(snapshots => {
                    snapshots.docs.forEach(doc => {
                        const company = doc.data();

                        companies.push(company);
                    });

                    resolve(companies);
                })
                .catch(e => {
                    console.log(e);
                    reject([]);
                });
        } catch (e) {
            console.log('error', e);
            reject([]);
        }

    });
});

const searchMoreManagers = functions.https.onCall((data: SearchMore, context: any) => {
    return new Promise(async (resolve, reject) => {
        try {
            const companies: any[] = [];

            store.collection('companies')
                .where('keywords', 'array-contains', data.search.toLowerCase())
                .orderBy('id')
                .startAfter(data.lastId)
                .limit(searchConfig.queryLimit)
                .get()
                .then(snapshots => {
                    snapshots.docs.forEach(doc => {
                        const company = doc.data();

                        companies.push(company);
                    });

                    resolve(companies);
                })
                .catch(e => {
                    console.log(e);
                    reject([]);
                });

        } catch (e) {
            console.log('error', e);
            reject([]);
        }

    });
});

export {searchManagers, searchMoreManagers, onCreateCompany, onCreateCompanyInStore};
