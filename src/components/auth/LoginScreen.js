import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
	return (
		<div className='auth'>
			<h3 className='auth-title'>Login</h3>

			TODO: Logotipo de intexa a la izquierda
			<form>
				<input className='auth-input'
					autoComplete='off'
					name='email'
					placeholder='Correo eléctronico'
					type='text'
				/>
				<input className='auth-input'
					name='password'
					placeholder='Contraseña'
					type='password'
				/>

				<button className='btn_frame'
					type='submit'

				>
					Login
				</button>

				<hr />

				<div className='auth-social_networks'>
					<strong>Iniciando sesión con redes sociales</strong>

					<div className="google-btn"	>
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
