import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { BlogScreen } from '../components/pages/BlogScreen';
import { Homepage } from '../components/pages/Homepage';


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
						component={Homepage}
					/>

					<Redirect to='/auth/login' />

				</Switch>
			</div>
		</Router>
	)
}
