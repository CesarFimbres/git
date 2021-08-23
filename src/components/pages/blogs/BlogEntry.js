import React from 'react'

export const BlogEntry = ({ value }) => {
	return (
		<div className='blog_entry' >

			<img
				className='blog_entry-picture'
				src='https://m.media-amazon.com/images/I/61tK2HtjkxL._AC_.jpg'
				alt='Osito teddy' loading='lazy'
			/>

			{/*
			<div
				className='blog_entry-picture'
				style={{
					backgroundSize: 'cover',
					backgroundImage: 'url(https://m.media-amazon.com/images/I/61tK2HtjkxL._AC_.jpg)',
				}}
			></div> 
			*/}

			<div className='blog_entry-body' >
				<p className='blog_entry-title'>
					{value} - Un nuevo dia.
				</p>
				<p className='blog_entry-content'>
					Un nuevo dia siempre trae una oportunidad para comenzar de nuevo.
					ok eso es buena señal, voy a regresar los cambios
				</p>
			</div>

			<div className='blog_entry-date' >
				<span>Lunes</span>
				<h4>28</h4>
			</div>
		</div>
	)
}
