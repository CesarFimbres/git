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
				}
			}

		case types.blogsLoad:
			return {
				...state,
				notes: [...action.payload]
			}

		default:
			return state;
	}

}
