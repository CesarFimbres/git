import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startLoginEmailPassword, startGoogleLogin, } from '../../actions/auth';

export const LoginScreen = () => {


	const [formValues, handleInputChange] = useForm({
		email: 'anna@gmail.com',
		password: '123456'
	})
	const { email, password } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();

		if (isFormValid()) {
			dispatch(startLoginEmailPassword(email, password));
		}
	}

	const dispatch = useDispatch();
	const { msgError, loading } = useSelector(state => state.ui);

	const isFormValid = () => {

		if (!validator.isEmail(email)) {
			dispatch(setError('Email is not valid'));
			return false;
		}

		if (password.length < 6) {
			dispatch(setError('Password should be at lease 6 characters'));
			return false;
		}

		dispatch(removeError());
		return true
	}


	const handleGoogleLogin = (params) => {
		dispatch(startGoogleLogin());
	}


	return (
		<div className='auth'>
			<h3 className='auth-title'>Login</h3>

			<form
				onSubmit={handleLogin}
				className='animate__animated animate__fadeIn animate__faster'
			>

				{msgError &&
					<div className='auth-alert_error'>
						{msgError}
					</div>
				}

				<input className='auth-input'
					autoComplete='off'
					name='email'
					placeholder='Correo eléctronico'
					type='text'
					value={email}
					onChange={handleInputChange}
				/>
				<input className='auth-input'
					name='password'
					placeholder='Contraseña'
					type='password'
					value={password}
					onChange={handleInputChange}
				/>

				<button
					className='btn_frame'
					onClick={handleLogin}
					type='submit'
					disabled={loading}
				>
					Iniciar sesión
				</button>

				<hr />

				<div className='auth-social_networks'>
					<strong>Iniciando sesión con redes sociales</strong>

					<div
						className="google-btn"
						onClick={handleGoogleLogin}
					>
						<div className="google-icon-wrapper">
							<img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
						</div>
						<p className="btn-text">
							<b>Inicia sesión con google</b>
						</p>
					</div>
				</div>

				<Link to='/auth/register'>
					Crear una cuenta nueva
				</Link>

			</form>
		</div>
	)
}
