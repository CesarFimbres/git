import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../../actions/auth'

import { BlogEntries } from './BlogEntries'

export const BlogAside = () => {


	const dispatch = useDispatch()
	const handleLogout = () => {
		dispatch(startLogout())
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
					<span>César</span>
				</h3>

				<button
					className='btn'
					onClick={handleLogout}
				>
					<i className="fas fa-sign-out-alt"></i>
					Logout
				</button>
			</div>

			<div className='blog_aside-new_entry' >
				<i className='far fa-calendar-plus fa-4x'></i>
				<span>Nuevo blog</span>
			</div>

			<BlogEntries />

		</aside>
	)
}
