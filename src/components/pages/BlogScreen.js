import React from 'react'

import { BlogData } from '../../assets/data'
import { Footer } from '../sections/Footer';
import { Navbar } from "../sections/Navbar";

export const BlogScreen = () => {
	return (
		<div className='blog_screen'>
			<Navbar />
			<div className='blog_screen-hero'>
				<img src={BlogData[0].image} alt={BlogData[0].title} loading="lazy" />
				<div className='blog_screen-overlay'>
					<div className='blog_screen-hero_wrapper'>
						<h3>Bienvenido a nuestro BLOG</h3>
					</div>
				</div>
			</div>

			<div className='blog_screen-categories'>
				<ul>
					<li>categoria</li>
					<li>categoria</li>
					<li>categoria</li>
					<li>categoria</li>
					<li>categoria</li>
				</ul>
			</div>

			<div className='blog_screen-container'>
				<div className='blog_screen-content'>Contenido del blog_screen, con imagenes y texto</div>
				<div className='blog_screen-aside'>
					<form className='form_group'>
						<input type="text" name="search_blog" placeholder='Buscar blog' />
						<i className="fas fa-search"></i>
					</form>
					Barra lateral con Buscador, seccion del autor, ultomos post, suscripcion de news letter, galetias, tags del post
				</div>

			</div>

			<Footer />

		</div>
	)
}
