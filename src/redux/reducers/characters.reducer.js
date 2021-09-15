import { SET_CHARACTERS, SET_ERROR, SET_LOADING } from "../types/characters.type";

const Initial_State = {
    data:[],
    loading: true,
    isNextAvailable:true
}

export default (state = Initial_State, action) => {
    switch(action.type){
        case SET_LOADING:
            return {...state,loading:action.payload,error:''};
        case SET_CHARACTERS:
            return {...state, data:action.payload.results, isNextAvailable: action.payload.info.next , error:'', loading: false}
        case SET_ERROR:
            return {...state, error: action.payload, loading: false}
        default:
            return state;
    }
}