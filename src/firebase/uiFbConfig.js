import firebase from 'firebase';

const uiConfig = {
	signInFlow: "popup",
	signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.FacebookAuthProvider.PROVIDER_ID,
	],
	signInSuccessUrl: '/',
};

export default uiConfig;
