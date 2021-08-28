import React from 'react';
import { useSelector } from 'react-redux';


// import { BlogCard } from './BlogCard'
import { BlogAside } from './BlogAside';
import { BlogData } from '../../../assets/data';
import { Footer } from '../../sections/Footer';
import { Navbar } from "../../sections/Navbar";
import { NotesScreen } from './NotesScreen';
import { NothingSelected } from './NothingSelected';

export const BlogScreen = () => {

	const { active } = useSelector(state => state.blogs)

	return (

		<div className='blog_screen'>
			<Navbar />

			<div className='blog_screen-hero animate__animated animate__fadeIn'>
				<img src={BlogData[0].image} alt={BlogData[0].title} loading="lazy" />
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

			{/* This section is to create a new blog 
				La sección de botones puede ser la barra lateral justo como lo hace frenando 
				asi se simplifica el proceso de codificación
			*/}




			<div className='blog_screen-container'>
				<main className='blog_screen-content'>
					<div className='colapsado_noBorrar' >
						Colapsado no borrar
						{/* 					
					{
						BlogData.map((blogContent) => (

							<BlogCard key={blogContent.index}
								category={blogContent.category}
								date={blogContent.date}
								imageAlt={blogContent.title}
								imageUrl={blogContent.image}
								title={blogContent.title}
							>
								<p className='blog-paragraph'> {blogContent.paragraph}	</p>

							</BlogCard>
						))
					}
					<BlogCard key={BlogData[5].index}
						category={BlogData[5].category}
						date={BlogData[5].date}
						imageAlt={BlogData[5].title}
						imageUrl={BlogData[5].image}
						title={BlogData[5].title}
					>
						<p className='blog-paragraph'> {BlogData[5].paragraph}	</p>
					</BlogCard>
 */}

					</div>

					{
						(active)
							? (<NotesScreen />)
							: (<NothingSelected />)
					}

					{/* <NotesScreen /> */}
				</main>

				<BlogAside />

			</div>

			<Footer />

		</div>
	)
}
