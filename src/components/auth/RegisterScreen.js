import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'


export const RegisterScreen = () => {

	const [formValues, handleInputChange] = useForm({
		name: 'Anna',
		email: 'anna@gmail.com',
		password: '123456',
		password2: '123456',
	})
	const { email, name, password, password2 } = formValues;

	const handleRegister = (e) => {
		e.preventDefault();
		console.log(email, name, password, password2);
	}



	return (
		<div className='auth'>
			<h3 className='auth-title'>Registro</h3>

			TODO: Logotipo de intexa a la izquierda
			<form onSubmit={handleRegister}>
				<input className='auth-input'
					autoComplete='off'
					name='name'
					placeholder='Nombre'
					type='text'
					value={name}
					onChange={handleInputChange}
				/>
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
				<input className='auth-input'
					name='password2'
					placeholder='Confirmar contraseña'
					type='password'
					value={password2}
					onChange={handleInputChange}
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
