import {COMPANIES} from './db-data';

import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAdW2GDjigrgBQoNp_Uuvzbs9gr3hoXnNg",
    authDomain: "test-one-true.firebaseapp.com",
    databaseURL: "https://test-one-true.firebaseio.com",
    projectId: "test-one-true",
    storageBucket: "test-one-true.appspot.com",
    messagingSenderId: "862666513289",
    appId: "1:862666513289:web:2ea0cd13f3d71424395f58",
    measurementId: "G-KJ3266GKQ8"
};
console.log('Uploading data to the database with the following config:\n');

console.log(JSON.stringify(config));

console.log('\n\n\n\nMake sure that this is your own database, so that you have write access to it.\n\n\n');

firebase.initializeApp(config);

const db = firebase.firestore();

async function uploadData() {

  const batch = db.batch();

  const companies = db.collection('companies');

  COMPANIES.forEach(async (company: any) => {
      await companies.add({...company});
  });

  return batch.commit();
}

uploadData()
  .then(() => {
    console.log('Writing data, exiting in 10 seconds ...\n\n');

    setTimeout(() => {

      console.log('\n\n\nData Upload Completed.\n\n\n');
      process.exit(0);

    }, 10000);

  })
  .catch(err => {
    console.log('Data upload failed, reason:', err, '\n\n\n');
    process.exit(-1);
  });


