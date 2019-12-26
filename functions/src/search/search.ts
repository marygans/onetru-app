import * as functions from 'firebase-functions';

import {searchConfig} from '../config/search.config';
import {Search} from '../common/dtos/search.dto';
import {SearchMore} from '../common/dtos/searchMore.dto';
import * as admin from 'firebase-admin';

const searchManagers = functions.https.onCall((data: Search, context: any) => {
    return new Promise((resolve, reject) => {
        try {
            const companies: any[] = [];
            const ref = admin.database().ref().child('companies').orderByKey();

            ref.limitToFirst(searchConfig.queryLimit)
                .once('value', snapshot => {
                    snapshot.forEach(childSnapshot => {
                        const id = childSnapshot.key;
                        const company = childSnapshot.val();
                        company['id'] = id;
                        companies.push(company);
                    });

                    resolve(
                        {
                            companies,
                            count: companies.length,
                            lastId: companies[companies.length - 1] ? companies[companies.length - 1].id : null,
                        }
                    );
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
            const lastId = data.lastId;
            const ref = admin.database().ref().child('companies').orderByKey();
            const newRef = ref.startAt(lastId);

            newRef.limitToFirst(searchConfig.nextQueryLimit).once('value', snapshot => {
                snapshot.forEach(childSnapshot => {
                    if (childSnapshot) {
                        const id = childSnapshot.key;
                        if (lastId !== id) {
                            const company = childSnapshot.val();
                            company['id'] = id;
                            companies.push(company);
                        }
                    }
                });

                resolve(
                    {
                        companies,
                        count: companies.length,
                        lastId: companies[companies.length - 1] ? companies[companies.length - 1].id : null,
                    }
                );
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
