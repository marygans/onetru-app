import { reduxSagaFirebase } from './../firebase/fbConfig';

class AuthService {

	signUpWithEmailAndPassword = ({email, password}) => {
		return reduxSagaFirebase.auth.createUserWithEmailAndPassword(email, password);
	};

	setUserToDb = ({email, typeOfUser, uid}) => {
		return reduxSagaFirebase.database.update(`users/${uid}`, { email, typeOfUser, uid });
	};

	loginWithEmailAndPassword = ({email, password}) => {
		return reduxSagaFirebase.auth.signInWithEmailAndPassword(email, password);
	};

	getUser = (uid) => {
		return reduxSagaFirebase.database.read(`users/${uid}`);
	};

	signOut = () => {
		return reduxSagaFirebase.auth.signOut();
	};

	authChannel = () => {
		return reduxSagaFirebase.auth.channel();
	}

}

const AuthApiService = new AuthService();

export default AuthApiService;
export { AuthApiService as AuthService };
