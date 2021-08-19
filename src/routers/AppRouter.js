import React, { useEffect, useState } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { useDispatch } from 'react-redux'


import { AuthRouter } from './AuthRouter';
import { BlogScreen } from '../components/pages/BlogScreen';
import { firebase } from '../firebase/firebaseConfig';
import { HomeScreen } from '../components/pages/HomeScreen';
import { Loading } from '../components/sections/Loading'
import { login } from '../actions/auth';


export const AppRouter = () => {

	const dispatch = useDispatch();

	// * Checking if user is loged in  or not 
	const [checking, setChecking] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);


	//* Getting user login data from firebase, when not logged return user=null
	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}

			setChecking(false)
		});
	}, [dispatch, setChecking, setIsLoggedIn])


	// * Checking for login status
	if (checking) {
		return (
			<>
				<Loading />
			</>
		)
	}


	return (
		<Router>
			<div>
				<Switch>

					<Route
						path='/auth'
						component={AuthRouter}
					/>

					<Route
						path='/blog'
						component={BlogScreen}
					/>

					<Route
						exact
						path='/'
						component={HomeScreen}
					/>

					<Redirect to='/auth/login' />

				</Switch>
			</div>
		</Router>
	)
}
