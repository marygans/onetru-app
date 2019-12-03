import firebase from 'firebase/app';
import 'firebase/auth';

import {FIREBASE_API_CONFIG} from '../config';

if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_API_CONFIG)
}

const auth = firebase.auth();

const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
};

export {
    auth,
    firebase,
    uiConfig,
}
