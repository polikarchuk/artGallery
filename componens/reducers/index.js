import {combineReducers} from 'redux'
import user from './userReducer'
import gallery from './galleryReducer'


const  reducer = combineReducers({
    gallery,
    user
});

export  default reducer