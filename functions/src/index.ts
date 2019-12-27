import * as admin from 'firebase-admin';

import {onCreateCompany, onCreateCompanyInStore, searchManagers, searchMoreManagers} from './search/search';
import {FIREBASE_API_CONFIG} from './config/config';

admin.initializeApp({
    ...FIREBASE_API_CONFIG,
});

export const store = admin.firestore();

export const search = searchManagers;
export const searchMore = searchMoreManagers;
export const handlerCompanyCreate = onCreateCompany;
export const handlerCompanyCreateInStore = onCreateCompanyInStore;
