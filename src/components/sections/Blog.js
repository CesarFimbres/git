import React from "react";

import { BlogData } from '../../assets/data'

export const Blog = () => {
	return (
		<section id="Blog" className="blog align w_100">
			<h1 className="title_section">
				Nuestros <span>Blogs</span> más recientes
			</h1>
			<div className='blog-container'>
				<div className='big_blog'>
					<div className='big_blog-image align_center'>
						<img src={BlogData[0].image} alt={BlogData[0].title} />
					</div>
					<div className='big_blog-comments'>
						<h3 className='big_blog-title'>{BlogData[0].title}</h3>
						<p className='big_blog-category'>
							<span className='blog-date'>{BlogData[0].date}</span>
							{"  -  " + BlogData[0].category}
						</p>
						<p className='blog-paragraph'>{BlogData[0].paragraph}</p>
						<a href="#Leer_mas">Leer más   <i class="fas fa-angle-double-right"></i> </a>
					</div>
				</div>

				<div className='card_blog-wrapper'>
					<div className='card_blog'>
						<div className='card_blog-image align_center'>
							<img src={BlogData[1].image} alt={BlogData[1].title} />
						</div>
						<div className='card_blog-comments'>
							<h3 className='card_blog-title'>{BlogData[1].title}</h3>
							<p className='card_blog-category'>
								<span className='blog-date'>{BlogData[1].date}</span>
								{"  -  " + BlogData[1].category}
							</p>
							<p className='blog-paragraph'>{BlogData[1].paragraph}</p>
							<a href="#Leer_mas">Leer más   <i class="fas fa-angle-double-right"></i> </a>
						</div>
					</div>
					<div className='card_blog'>
						<div className='card_blog-image align_center'>
							<img src={BlogData[2].image} alt={BlogData[2].title} />
						</div>
						<div className='card_blog-comments'>
							<h3 className='card_blog-title'>{BlogData[2].title}</h3>
							<p className='card_blog-category'>
								<span className='blog-date'>{BlogData[2].date}</span>
								{"  -  " + BlogData[2].category}
							</p>
							<p className='blog-paragraph'>{BlogData[2].paragraph}</p>
							<a href="#Leer_mas">Leer más   <i class="fas fa-angle-double-right"></i> </a>
						</div>
					</div>
					<div className='card_blog'>
						<div className='card_blog-image align_center'>
							<img src={BlogData[3].image} alt={BlogData[3].title} />
						</div>
						<div className='card_blog-comments'>
							<h3 className='card_blog-title'>{BlogData[3].title}</h3>
							<p className='card_blog-category'>
								<span className='blog-date'>{BlogData[3].date}</span>
								{"  -  " + BlogData[3].category}
							</p>
							<p className='blog-paragraph'>{BlogData[3].paragraph}</p>
							<a href="#Leer_mas">Leer más   <i class="fas fa-angle-double-right"></i> </a>
						</div>
					</div>
				</div>

			</div>
		</section>
	);
};
