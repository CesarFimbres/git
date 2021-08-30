import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../../actions/auth'
import { startNewBlog } from '../../../actions/blogs'

import { BlogEntries } from './BlogEntries'

export const BlogAside = () => {


	const dispatch = useDispatch();

	const { name } = useSelector(state => state.auth);

	const handleLogout = () => {
		dispatch(startLogout())
	}

	const handleAddNew = () => {
		dispatch(startNewBlog());
	}

	return (
		<aside className='blog_aside'>

			<form className='blog_aside-form_group'>
				<input type="text" name="search_blog" placeholder='Buscar blog' />
				<i className="fas fa-search"></i>
			</form>

			<div className='blog_aside-navbar' >
				<h3>
					<i className="fab fa-galactic-republic"></i>
					<span>{name}</span>
				</h3>

				<button
					className='btn'
					onClick={handleLogout}
				>
					<i className="fas fa-sign-out-alt"></i>
					Logout
				</button>
			</div>

			<div
				className='blog_aside-new_entry'
				onClick={handleAddNew}
			>
				<i className='fas fa-blog fa-4x'></i>
				<span>Nuevo blog</span>
			</div>

			<BlogEntries />

		</aside>
	)
}
