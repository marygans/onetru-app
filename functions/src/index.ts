import * as admin from 'firebase-admin';

import {detachListeners, searchManagers, searchMoreManagers} from './search/search';
import {FIREBASE_API_CONFIG} from './config/config';

admin.initializeApp(FIREBASE_API_CONFIG);

export const search = searchManagers;
export const searchMore = searchMoreManagers;
export const detachCompanyListeners = detachListeners;
