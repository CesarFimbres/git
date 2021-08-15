import React from 'react'

import { Footer } from '../sections/Footer';
import { Navbar } from "../sections/Navbar";

export const BlogScreen = () => {
	return (
		<div className='blog_screen'>
			<Navbar />
			<div className='blog_screen-hero'>
				<div className='blog_screen-overlay'>
					<img src='' alt='' />
					<svg className='Logotipo de la empresa'></svg>
					<div className='blog_screen-hero_wrapper'>
						<h3>Bienvenido a nuestro blog_screen!</h3>
					</div>
				</div>
			</div>

			<div className='blog_screen-categories'>
				<sapn>Slider conteniendo globos de categorias</sapn>
			</div>

			<div className='blog_screen-container'>
				<div className='blog_screen-content'>Contenido del blog_screen, con imagenes y texto</div>
				<div className='blog_screen-aside'>Barra lateral con Buscador, seccion del autor, ultomos post, suscripcion de news letter, galetias, tags del post</div>

			</div>

			<Footer />


		</div>
	)
}
