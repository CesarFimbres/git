
// * Process to upload data to Firestore 

import { db } from "../firebase/firebaseConfig"

export const loadBlogs = async (uid) => {

	// * Get all the ID blogs documents into the current user 
	const blogsSnap = await db.collection(`${uid}/git/blogs`).get();
	const blogs = [];

	// * Now we get all blog document detail each one at time
	blogsSnap.forEach(snapChild => {
		blogs.push({
			id: snapChild.id,
			...snapChild.data()
		})
	});

	return blogs;
}