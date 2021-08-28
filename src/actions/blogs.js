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

		// * Send the estructure of data blog to the store to  be saved into Firestore DB
		dispatch(activeBlog(docRef.id, newBlog));

		// * Insert the info into store and display a new entry note y the sideBar 
		dispatch(addNewBlog(docRef.id, newBlog));

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

export const addNewBlog = (id, note) => ({
	type: types.blogsAddNew,
	payload: {
		id,
		...note,
	}
})



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
		const { id } = note;

		await db.doc(`${uid}/git/blogs/${id}`).update(note);

		dispatch(refreshBlog(id, note));

		Swal.fire({
			icon: 'success',
			position: 'top-end',
			text: 'Blog almacenado sin problema',
			timer: 3000,
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
			allowOutsideClick: false,
			position: 'top-end',
			title: 'Por favor espere...',
			text: 'Cargando archivo',
			didOpen: () => {
				Swal.showLoading();
			}
		});

		const fileUrl = await fileUpload(file);
		activeBlog.imageUrl = fileUrl;
		dispatch(startSaveBlog(activeBlog));

		Swal.close();

	}

}


export const startDeleting = (id) => {
	return (dispatch, getState) => {

		Swal.fire({
			title: '¿Eliminando Blog?',
			text: "No podrá revertir esta acción",
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#23548a',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, eliminarlo!',
			cancelButtonText: 'No, está bien'
		}).then((result) => {

			if (result.isConfirmed) {

				const { uid } = getState().auth;
				const { title } = getState().blogs.active;

				// * Deleting collection from Firebase DB
				db.doc(`${uid}/git/blogs/${id}`).delete();

				// * Deleting from local store
				dispatch(deleteBlog(id));

				Swal.fire({
					confirmButtonColor: '#23548a',
					icon: 'success',
					text: '¡Eliminado!',
					title: title,
				})
			}
		})



	}

}

export const deleteBlog = (id) => ({
	type: types.blogsDelete,
	payload: id,
})


export const blogLogout = () => ({
	type: types.blogsLogoutCleaning,
	payload: null
})