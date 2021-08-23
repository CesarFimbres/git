import React from 'react'

export const NotesAppBar = () => {
	return (
		<div className='notes-appbar' >
			<span>28 de agosto de 2020</span>
			<div>
				<button className='btn' >
					<i className="far fa-image"></i>
					Picture
				</button>
				<button className='btn' >
					<i className="fas fa-cloud-upload-alt"></i>
					Save
				</button>
			</div>
		</div>
	)
}
