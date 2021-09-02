import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { BlogScreen } from "../components/pages/blogs/BlogScreen";
import { HomeScreen } from "../components/pages/HomeScreen";
import { UnderConstruction } from "../components/sections/UnderConstruction";

// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { firebase } from "../firebase/firebaseConfig";
// import { AuthRouter } from "./AuthRouter";
// import { PrivateRoute } from "./PrivateRoute";
// import { PublicRoute } from "./PublicRoute";

// import { Loading } from "../components/sections/Loading";
// import { login } from "../actions/auth";
// import { startLoadingBlogs } from "../actions/blogs";
// import { BlogEditScreen } from "../components/pages/blogs/BlogEditScreen";

export const AppRouter = () => {
	// const dispatch = useDispatch();

	// // * Checking if user is logged in  or not
	// const [checking, setChecking] = useState(true);
	// const [isLoggedIn, setIsLoggedIn] = useState(false);

	// //* Getting user login data from firebase, when not logged return user=null
	// useEffect(() => {
	// 	firebase.auth().onAuthStateChanged(async (user) => {
	// 		if (user?.uid) {
	// 			dispatch(login(user.uid, user.displayName));
	// 			setIsLoggedIn(true);

	// 			dispatch(startLoadingBlogs(user.uid));
	// 		} else {
	// 			setIsLoggedIn(false);
	// 		}

	// 		setChecking(false);
	// 	});
	// }, [dispatch, setChecking, setIsLoggedIn]);

	// // * Checking for login status
	// if (checking) {
	// 	return (
	// 		<>
	// 			<Loading />
	// 		</>
	// 	);
	// }

	return (
		<Router>
			<div>
				<Switch>
					{/* <PublicRoute
						path="git/auth"
						component={AuthRouter}
						isAuthenticated={isLoggedIn}
					/>

					<PrivateRoute
						exact
						isAuthenticated={isLoggedIn}
						path="git/editBlog"
						component={BlogEditScreen}
					/> 

					<Route
						exact
						isAuthenticated={isLoggedIn}
						path="git/blog"
						component={BlogScreen}
					/>*/}

					<Route exact path="/git/blog" component={BlogScreen} />

					<Route exact path="/git/underConstruction" component={UnderConstruction} />

					<Route path="/git/home" component={HomeScreen} />

					<Route exact path="/git/" component={HomeScreen} />

					<Redirect to="/git/" />
				</Switch>
			</div>
		</Router>
	);
};
