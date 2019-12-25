import * as functions from 'firebase-functions';

import {searchConfig} from '../config/search.config';
import {Search} from '../common/dtos/search.dto';
import {SearchMore} from '../common/dtos/searchMore.dto';
import * as admin from 'firebase-admin';

const searchManagers = functions.https.onCall((data: Search, context: any) => {
    return new Promise((resolve, reject) => {
        try {
            const companies: any[] = [];
            const ref = admin.database().ref().child('companies');

            ref
                .orderByChild("name")
                .limitToFirst(searchConfig.queryLimit)
                .once('value', snapshot => {
                snapshot.forEach(childSnapshot => {
                    const id = childSnapshot.key;
                    const company = childSnapshot.val();
                    company['id'] = id;
                    companies.push(company);
                });

                resolve({companies, count: companies.length});
            })
                .then(result => resolve(result))
                .catch(error => reject(error))
        } catch (e) {
            console.log('error', e);
            reject(e);
        }

    });
});

const searchMoreManagers = functions.https.onCall((data: SearchMore, context: any) => {
    return new Promise((resolve, reject) => {
        try {
            const companies: any[] = [];
            const startAt = data.startAt;
            const ref = admin.database().ref().child('companies');

            ref.orderByChild("name").limitToFirst(3).startAt(startAt).once('value', snapshot => {
                snapshot.forEach(childSnapshot => {
                    const id = childSnapshot.key;
                    const company = childSnapshot.val();
                    company['id'] = id;
                    companies.push(company);
                });

                resolve({companies, count: companies.length});
            })
                .then(result => resolve(result))
                .catch(error => reject(error))
        } catch (e) {
            console.log('error', e);
            reject(e);
        }

    });
});

export {searchManagers, searchMoreManagers};
