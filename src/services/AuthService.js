import {auth} from '../firebase';

class AuthService {

	signUp = ({email, password}) => {
		return auth.createUserWithEmailAndPassword(email, password);
	};

	login = ({email, password}) => {
		return auth.signInWithEmailAndPassword(email, password);
	};

	signOut = () => {
		return auth.signOut();
	};

}

const AuthApiService = new AuthService();

export default AuthApiService;
export { AuthApiService as AuthService };
