import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {
	return (
		<div className='notes-main'>

			<NotesAppBar />

			<div className='notes-content' >
				<input
					className='notes-title_input'
					placeholder='Titulo del blog'
					type='text'
				/>

				<textarea
					className='notes-textarea'
					placeholder='Contenido del blog'
				/>

				<div className='notes-image' >
					<img
						src='https://img.chilango.com/2014/05/de-noche-todos-los-gatos-son-pardos.jpg'
						alt='México de noche'
					/>
				</div>

			</div>

		</div>
	)
}
