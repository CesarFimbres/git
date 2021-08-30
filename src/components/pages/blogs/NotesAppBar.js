import moment from 'moment';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startImageUploading, startSaveBlog } from '../../../actions/blogs'

export const NotesAppBar = () => {

	const dispatch = useDispatch();
	const { active: blogActiveNote, } = useSelector(state => state.blogs);

	const blogDate = moment(blogActiveNote.date);

	const handlePictureUpload = () => {
		document.querySelector('#fileSelector').click();
	}

	const handleFileChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			dispatch(startImageUploading(file));
		}
	}


	const handleSave = () => {
		dispatch(startSaveBlog(blogActiveNote));
	}


	return (
		<div className='notes-appbar' >
			<strong>{blogDate.format("dddd, LL")}</strong>

			<input
				id='fileSelector'
				type='file'
				name='file'
				style={{ display: 'none' }}
				onChange={handleFileChange}
			/>

			<div>
				<button
					className='btn'
					onClick={handlePictureUpload}
				>
					<i className="far fa-image"></i>
					Picture
				</button>
				<button
					className='btn'
					onClick={handleSave}
				>
					<i className="fas fa-cloud-upload-alt"></i>
					Save
				</button>
			</div>
		</div>
	)
}
