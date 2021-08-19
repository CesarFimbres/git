import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { uiFinishLoading, uiStartLoading } from './ui';


export const startGoogleLogin = () => {
	return (dispatch) => {

		firebase.auth().signInWithPopup(googleAuthProvider)
			.then(user => {

				console.log(user)
				dispatch(
					login(user.dispatch, user.displayName)
				)

			})

	}
}


export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => {

		dispatch(uiStartLoading())

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
				dispatch(uiFinishLoading());
			})
			.catch(err => {
				dispatch(uiFinishLoading());
				console.log(err);
			})
	}
}


export const startRegisterWithEmailNameAndPassword = (email, name, password) => {
	return (dispatch) => {

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(async ({ user }) => {

				await user.updateProfile({ displayName: name });

				console.log(user);
				dispatch(
					login(user.uid, user.displayName)
				)

			})
			.catch(err => {
				console.log(err);
			}
			)

	}
}


export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName
	}
});


export const startLogout = () => {
	return async (dispatch) => {
		await firebase.auth().signOut();

		dispatch(logout());
	}
}

export const logout = () => ({
	type: types.logout
})
