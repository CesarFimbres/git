import React from 'react'

export const BlogEntry = ({ author, body, category, date, id, imageUrl, intro, title }) => {
	return (
		<div className='blog_entry' >

			<img
				className='blog_entry-picture'
				src={imageUrl}
				alt={title} loading='lazy'
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
					{title}
				</p>
				<p className='blog_entry-content'>
					{body}
				</p>
			</div>

			<div className='blog_entry-date' >
				<span>Lunes</span>
				<h4>28</h4>
			</div>
		</div>
	)
}