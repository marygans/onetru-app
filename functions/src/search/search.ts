import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import {searchConfig} from '../config/search.config';
import {Search} from '../common/dtos/search.dto';
import {SearchMore} from '../common/dtos/searchMore.dto';

const searchManagers = functions.https.onCall((data: Search, context: any) => {
    return new Promise((resolve, reject) => {
        try {
            const companies: any[] = [];
            const search = data.search ? data.search : "";

            console.log('data', data);
            const ref = admin.firestore().collectionGroup('companies');

            ref.where(searchConfig.fields.address, "==", search)
                .where(searchConfig.fields.city, "==", search)
                .where(searchConfig.fields.zip, "==", search)
                .orderBy('name', 'desc')
                .limit(searchConfig.limit)
                .get()
                .then((snapshots: any) => {
                    const start = snapshots.docs[snapshots.docs.length - 1];

                    const listener = ref.orderBy('name').startAt(start).onSnapshot((docCompanies: any) => {
                        docCompanies.forEach((docCompany: any) => {
                            const id = docCompany.id;
                            const company = docCompany.data();
                            company['id'] = id;

                            companies.push(company);
                        });
                    });
                    // console.log('listener', listener);
                    listener();
                    resolve({companies, start});
                })
                .catch(reason => {
                    // console.log('Collection("companies") reason: ' + reason);
                    reject(reason);
                });
        } catch (e) {
            // console.log('error', e);
            reject(e);
        }

    });
});

const searchMoreManagers = functions.https.onCall((data: SearchMore, context: any) => {
    return new Promise((resolve, reject) => {
        try {
            const companies: any[] = [];
            const {search, startAt}: SearchMore = data;

            const ref = admin.firestore().collection('companies');

            ref.where(searchConfig.fields.address, '==', search)
                .where(searchConfig.fields.city, '==', search)
                .where(searchConfig.fields.zip, '==', search)
                .orderBy('name', 'desc').startAt(startAt)
                .limit(searchConfig.limit)
                .get()
                .then((snapshots: any) => {
                    const end = startAt;
                    const start = snapshots.docs[snapshots.docs.length - 1];

                    const listener = ref.orderBy('name').startAt(start)
                        .endBefore(end)
                        .onSnapshot((docCompanies: any) => {
                            docCompanies.forEach((docCompany: any) => {
                                const id = docCompany.id;
                                const company = docCompany.data();
                                company['id'] = id;

                                companies.push(company);
                            });
                        });
                    listener();

                    resolve({companies, start, end});
                })
                .catch(reason => {
                    console.log('Collection("companies").get gets err, reason: ' + reason);
                    reject(reason);
                });
        } catch (e) {
            console.log('error', e);
            reject(e);
        }
    });
});

const detachListeners = functions.https.onCall((data: any, context: any) => {
    console.log('detachListeners');
});

export {searchManagers, searchMoreManagers, detachListeners};
