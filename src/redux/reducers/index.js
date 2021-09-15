import {combineReducers} from 'redux';
import CharactersReducer from './characters.reducer';

export default combineReducers({
    characters: CharactersReducer,
})