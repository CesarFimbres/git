import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { activeBlog, startDeleting } from '../../../actions/blogs';
import { useForm } from '../../../hooks/useForm';

import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {

	const { active: blogActiveNote } = useSelector(state => state.blogs);
	const [formValues, handleInputChange, reset] = useForm(blogActiveNote);
	const { body, title } = formValues;

	const activeId = useRef(blogActiveNote.id);

	const dispatch = useDispatch();

	useEffect(() => {
		if (blogActiveNote.id !== activeId.current) {
			reset(blogActiveNote);
			activeId.current = blogActiveNote.id
		}
	}, [blogActiveNote, reset])

	useEffect(() => {
		dispatch(activeBlog(formValues.id, { ...formValues }));
	}, [formValues, dispatch])

	const handleDelete = () => {

		dispatch(startDeleting(blogActiveNote.id));

	}


	return (
		<div className='notes-main'>

			<NotesAppBar />

			<div className='notes-content' >
				<input
					className='notes-title_input'
					name='title'
					placeholder='Titulo del blog'
					type='text'
					value={title}
					onChange={handleInputChange}
				/>

				<textarea
					className='notes-textarea'
					name='body'
					placeholder='Contenido del blog'
					value={body}
					onChange={handleInputChange}
				/>

				{
					blogActiveNote.imageUrl &&
					<div className='notes-image' >
						<img
							src={blogActiveNote.imageUrl}
							alt={blogActiveNote.title}
						/>
					</div>
				}

			</div>

			<button
				className='btn_frame'
				onClick={handleDelete}
			>
				Eliminar Blog
			</button>

		</div>
	)
}
