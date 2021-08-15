import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { BlogScreen } from '../components/pages/BlogScreen';
import { HomeScreen } from '../components/pages/HomeScreen';


export const AppRouter = () => {
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
