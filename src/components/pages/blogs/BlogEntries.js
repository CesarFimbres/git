import React from 'react'
import { useSelector } from 'react-redux';

import { BlogEntry } from './BlogEntry';


export const BlogEntries = () => {

	const { notes } = useSelector(state => state.blogs);

	return (
		<div className='blog_entries' >
			{
				notes.map(entry => (
					<BlogEntry
						key={entry.id}
						{...entry}
					/>

				))
			}
		</div>
	)
}
