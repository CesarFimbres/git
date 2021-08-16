import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startLoginEmailPassword, startGoogleLogin, } from '../../actions/auth';

export const LoginScreen = () => {

	const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({
		email: 'fifi@gmail.com',
		password: '123456'
	})
	const { email, password } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLoginEmailPassword(email, password));
	}

	const handleGoogleLogin = (params) => {
		dispatch(startGoogleLogin());
	}

	return (
		<div className='auth'>
			<h3 className='auth-title'>Login</h3>

			TODO: Logotipo de intexa a la izquierda
			<form onSubmit={handleLogin}>
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

				>
					Login
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
