import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

export const AuthRouter = () => {
	return (
		<div className="auth-main">
			<div className="auth-container">
				<Switch>
					<Route exact path="git/auth/login" component={LoginScreen} />

					<Route exact path="git/auth/register" component={RegisterScreen} />

					<Redirect to="git/auth/login" />
				</Switch>
			</div>
		</div>
	);
};
