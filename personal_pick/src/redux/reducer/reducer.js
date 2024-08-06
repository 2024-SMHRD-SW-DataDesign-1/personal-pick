import * as types from '../type/types';

const initialState = {
    isUser : null,

}

const personalReducer = (state = initialState, action) => {
    switch(action.type){
        case types.LOGIN:

            break;
        case types.LOGOUT:
            break;
        default:
            return state;
    }
}

export default counterReducer;