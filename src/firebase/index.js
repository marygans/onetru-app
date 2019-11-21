import firebase from 'firebase/app';
import 'firebase/auth';

import {FIREBASE_API_CONFIG} from '../config';

if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_API_CONFIG)
}

const auth = firebase.auth();

export {
    auth,
    firebase,
}
