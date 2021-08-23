import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk'

import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducers'
import { blogsReducer } from '../reducers/blogsReducer'


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
	auth: authReducer,
	ui: uiReducer,
	blogs: blogsReducer,
})


export const store = createStore(
	reducers,
	composeEnhancers(
		applyMiddleware(thunk)
	),
);

