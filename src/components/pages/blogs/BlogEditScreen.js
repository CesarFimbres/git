import React from 'react';
import { useSelector } from 'react-redux';

import { BlogAside } from './BlogAside';
import { HeroData } from '../../../assets/data';
import { Footer } from '../../sections/Footer';
import { Navbar } from "../../sections/Navbar";
import { NotesScreen } from './NotesScreen';
import { NothingSelected } from './NothingSelected';

export const BlogEditScreen = () => {

	const { active } = useSelector(state => state.blogs)

	return (

		<div className='blog_screen'>
			<Navbar />

			{/* 
			<div className='blog_screen-hero animate__animated animate__fadeIn'>
				<img src={HeroData[0].image} alt={HeroData[0].title} loading="lazy" />
				<div className='blog_screen-overlay'>
					<div className='blog_screen-hero_wrapper'>
						<h3>Bienvenido a nuestro BLOG</h3>
					</div>
				</div>
			</div>
			*/}

			<div className='blog_screen-categories'>
				<ul>
					<li>construcción</li>
					<li>energía</li>
					<li>iluminación</li>
					<li>instalaciones</li>
					<li>equipo eléctrico</li>
				</ul>
			</div>

			{/* This section is to create a new blog 
				La sección de botones puede ser la barra lateral justo como lo hace frenando 
				asi se simplifica el proceso de codificación
			*/}




			<div className='blog_screen-container'>

				<BlogAside />

				<main className='blog_screen-content'>
					{
						(active)
							? (<NotesScreen />)
							: (<NothingSelected />)
					}
				</main>

			</div>

			<Footer />

		</div>
	)
}
