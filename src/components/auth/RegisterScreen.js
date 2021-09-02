import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";

import { useForm } from "../../hooks/useForm";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailNameAndPassword } from "../../actions/auth";

export const RegisterScreen = () => {
	const [formValues, handleInputChange] = useForm({
		name: "Anna",
		email: "anna@gmail.com",
		password: "123456",
		newPassword: "123456",
	});
	const { email, name, password, newPassword } = formValues;

	const handleRegister = (e) => {
		e.preventDefault();

		if (isFormValid()) {
			dispatch(startRegisterWithEmailNameAndPassword(email, name, password));
		}
	};

	const dispatch = useDispatch();
	const { msgError } = useSelector((state) => state.ui);

	const isFormValid = () => {
		if (validator.isEmpty(name)) {
			dispatch(setError("Name is required"));
			return false;
		}

		if (!validator.isEmail(email)) {
			dispatch(setError("Email is not valid"));
			return false;
		}

		if (password.length < 6) {
			dispatch(setError("Password showld be at lease 6 characters"));
			return false;
		} else if (password !== newPassword) {
			dispatch(setError("Password must be conicident"));
			return false;
		}

		dispatch(removeError());
		return true;
	};

	return (
		<div className="auth">
			<h3 className="auth-title">Registro</h3>

			<form
				onSubmit={handleRegister}
				className="animate__animated animate__fadeIn animate__faster"
			>
				{msgError && <div className="auth-alert_error">{msgError}</div>}

				<input
					className="auth-input"
					name="name"
					placeholder="Nombre"
					type="text"
					value={name}
					onChange={handleInputChange}
				/>
				<input
					className="auth-input"
					name="email"
					placeholder="Correo eléctronico"
					type="text"
					value={email}
					onChange={handleInputChange}
				/>
				<input
					className="auth-input"
					autoComplete="on"
					name="password"
					placeholder="Contraseña"
					type="password"
					value={password}
					onChange={handleInputChange}
				/>
				<input
					className="auth-input"
					autoComplete="on"
					name="newPassword"
					placeholder="Confirmar contraseña"
					type="password"
					value={newPassword}
					onChange={handleInputChange}
				/>

				<button className="btn_frame" type="submit">
					Registrarse
				</button>

				<Link to="/git/auth/login">¿ Se encuentra registrado ?</Link>
			</form>
		</div>
	);
};
