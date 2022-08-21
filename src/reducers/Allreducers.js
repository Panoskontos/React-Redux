import { AppStateReducer } from "./AppStateReducer";
import { booksDataReducer } from "./booksDataReducer";
import {combineReducers} from 'redux'


export default combineReducers({
    AppState: AppStateReducer,
    booksData: booksDataReducer
})