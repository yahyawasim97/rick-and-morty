import { getCharacters } from "../../services/characters.service";
import { SET_CHARACTERS, SET_ERROR, SET_LOADING } from "../types/characters.type";

export const getCharactersAction =  ({ page, gender, name }) => {
    return async dispatch => {
        dispatch({
            type: SET_LOADING,
            payload: true
        })
      try{
        const response = await getCharacters({page,gender,name});
        dispatch({
            type:SET_CHARACTERS,
            payload: response.data
        })
        window.scrollTo({top:0, behavior:'smooth'})
      }catch(e){
        dispatch({
            type:SET_ERROR,
            payload: response.results
        })
      }f
    };
  };
  