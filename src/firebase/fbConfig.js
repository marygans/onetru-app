import firebase from 'firebase';
import '@firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';

import {FIREBASE_API_CONFIG} from '../config';

const firebaseApp = firebase.initializeApp(FIREBASE_API_CONFIG);

const reduxSagaFirebase = new ReduxSagaFirebase(firebaseApp, firebaseApp.firestore());
const firestore = firebaseApp.firestore();

export {
	reduxSagaFirebase,
	firestore,
};
