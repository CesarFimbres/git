import React from 'react';
import { useSelector } from 'react-redux';


import { BlogCard } from './BlogCard'
import { HeroData } from '../../../assets/data';
import { Footer } from '../../sections/Footer';
import { Navbar } from "../../sections/Navbar";

export const BlogScreen = () => {

	const { notes } = useSelector(state => state.blogs)

	return (

		<div className='blog_screen'>
			<Navbar />

			<div className='blog_screen-hero animate__animated animate__fadeIn'>
				<img src={HeroData[0].image} alt={HeroData[0].title} loading="lazy" />
				<div className='blog_screen-overlay'>
					<div className='blog_screen-hero_wrapper'>
						<h3>Bienvenido a nuestro BLOG</h3>
					</div>
				</div>
			</div>

			<div className='blog_screen-categories'>
				<ul>
					<li>construcción</li>
					<li>energía</li>
					<li>iluminación</li>
					<li>instalaciones</li>
					<li>equipo eléctrico</li>
				</ul>
			</div>





			<div className='blog_screen-container'>

				<main className='blog_screen-content'>

					{
						notes.map((note) => (
							<BlogCard key={note.id}
								category={note.category}
								date={note.date}
								imageAlt={note.title}
								imageUrl={note.imageUrl}
								title={note.title}
							>
								<p className='blog_screen-paragraph'> {note.body} </p>
							</BlogCard>
						))
					}

				</main>

				<aside className='blog_aside'>

					<form className='blog_aside-form_group'>
						<input type="text" name="search_blog" placeholder='Buscar blog' />
						<i className="fas fa-search"></i>
					</form>

					This section is to create a new blog
					La sección de botones puede ser la barra lateral justo como lo hace frenando
					asi se simplifica el proceso de codificación

				</aside>

			</div>

			<Footer />

		</div>
	)
}
