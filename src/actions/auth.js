import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';

export const startLoginEmailPassword = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName
	}
})

export const startGoogleLogin = () => {
	return (dispatch) => {

		firebase.auth().signInWithPopup(googleAuthProvider)
			.then(userCredentials => {
				console.log(userCredentials)
			})

	}
}
