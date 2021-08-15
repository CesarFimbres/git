import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
	return (
		<div className='auth'>
			<h3 className='auth-title'>Registro</h3>

			TODO: Logotipo de intexa a la izquierda
			<form>
				<input className='auth-input'
					autoComplete='off'
					name='name'
					placeholder='Nombre'
					type='text'
				/>
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
				<input className='auth-input'
					name='password2'
					placeholder='Confirmar contraseña'
					type='password'
				/>

				<button className='btn_frame'
					type='submit'
				>
					Registrarse
				</button>

				<Link to='/auth/login'>
					¿ Se encuentra registrado ?
				</Link>

			</form>
		</div>
	)
}
