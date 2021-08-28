import React from 'react';
import moment from 'moment';
import 'moment/locale/es-mx';
import { useDispatch } from 'react-redux';
import { activeBlog } from '../../../actions/blogs';

moment.locale('es-mx');         // es-mx

export const BlogEntry = ({ author, body, category, date, id, imageUrl, intro, title }) => {

	const blogDate = moment(date);
	const dispatch = useDispatch();

	const handleEntryClick = () => {
		dispatch(activeBlog(id, {
			author,
			body,
			category,
			date,
			imageUrl,
			intro,
			title,
		})
		)
	}


	return (
		<div
			className='blog_entry animate__animated animate__fadeInLeft animate__faster'
			onClick={handleEntryClick}
		>

			<img
				className='blog_entry-picture'
				src={imageUrl}
				alt={title} loading='lazy'
			/>

			<div className='blog_entry-body' >
				<p className='blog_entry-title'>
					{title}
				</p>
				<p className='blog_entry-content'>
					{body}
				</p>
			</div>

			<div className='blog_entry-date' >
				<span>{blogDate.format('dddd')}</span>
				<h4>{blogDate.format('D')}</h4>
			</div>
		</div>
	)
}