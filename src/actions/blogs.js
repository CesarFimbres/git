import Swal from "sweetalert2";

import { db } from "../firebase/firebaseConfig"
import { fileUpload } from "../helpers/fileUpload";
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
			imageUrl: "",
			intro: "",
			title: "",
		}

		// * Save blog to FireStore DB depending user ID
		const docRef = await db.collection(`${uid}/git/blogs`).add(newBlog);

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


export const startSaveBlog = (note) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		const blogToFirestore = { ...note };
		delete blogToFirestore.id;

		await db.doc(`${uid}/git/blogs/${note.id}`).update(blogToFirestore);

		dispatch(refreshBlog(blogToFirestore.id, blogToFirestore));

		Swal.fire({
			icon: 'success',
			position: 'top-end',
			text: 'Blog almacenado sin problema',
			timer: 2000,
			title: note.title,
			showConfirmButton: false,
		})
	}
}


export const refreshBlog = (id, note) => ({
	type: types.blogsUpdated,
	payload: {
		id,
		note,
	}
})


export const startImageUploading = (file) => {

	return async (dispatch, getState) => {

		const { active: activeBlog } = getState().blogs;

		Swal.fire({
			title: 'Por favor espere...',
			text: 'Cargando archivo',
			allowOutsideClick: false,
			onBeforeOpen: () => {
				Swal.showLoading();
			}
		});

		const fileUrl = await fileUpload(file);
		activeBlog.imageUrl = fileUrl;
		dispatch(startSaveBlog(activeBlog));

		Swal.close();

	}

}
