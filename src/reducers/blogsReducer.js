/* 
	{
		notes: [],
		active: null,
		active:{
			id:'ferTERtwEWR52r6t3',
			title:'',
			body:'',
			imageUrl:'',
			date: 12345455673
		}
	}
 */

import { types } from "../types/types";

const initialState = {
	notes: [],
	active: null,
}

export const blogsReducer = (state = initialState, action) => {

	switch (action.type) {

		case types.blogsActive:
			return {
				...state,
				active: {
					...action.payload
				},
			}

		case types.blogsAddNew:

			return {
				...state,
				notes: [action.payload, ...state.notes],
			}

		case types.blogsLoad:
			return {
				...state,
				notes: [...action.payload],
			}

		case types.blogsUpdated:
			// * If active note (blog) exist, just it's replaced into notes array, otherwise it's inserted
			return {
				...state,
				notes: state.notes.map(
					note => note.id === action.payload.id
						? action.payload.note
						: note
				),
			}

		case types.blogsDelete:
			return {
				...state,
				active: null,
				notes: state.notes.filter(note => note.id !== action.payload),
			}

		case types.blogsLogoutCleaning:
			return {
				...state,
				active: null,
				notes: [],
			}

		default:
			return state;
	}

}
