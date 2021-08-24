import { db } from "../firebase/firebaseConfig"
import { loadBlogs } from "../helpers/loadBlogs";
import { types } from '../types/types';

export const startNewBlog = () => {
	return async (dispatch, getState) => {


		const { uid, name } = getState().auth

		const newBlog = {
			author: name,
			body: "",
			category: "",
			date: new Date().getTime(),
			imageUrl: "https://1.bp.blogspot.com/-79DdxzZkDog/T76QV6v5IuI/AAAAAAAAAEY/6DzpGZzsmfA/s320/homerocatolico_456_336.jpg",
			intro: "",
			title: "",
		}

		// * Save blog to FireStore DB depending user ID
		const docRef = await db.collection(`${uid}/git/blogs`).add(newBlog);
		console.log(docRef);

		// * Send the estructure of data blog to the store and after be saved into Firestore DB
		dispatch(activeBlog(docRef.id, newBlog));

		/*  Get and show the complete store state
		const state = getState();
		console.log(state) */
	}
}

// * Set the active note as the activeBlog
export const activeBlog = (id, note) => ({
	type: types.blogsActive,
	payload: {
		id,
		...note
	}
});


export const startLoadingBlogs = (uid) => {
	return async (dispatch) => {
		const notes = await loadBlogs(uid);
		dispatch(setBlogs(notes));

	}

}


export const setBlogs = (notes) => ({
	type: types.blogsLoad,
	payload: notes,
})


