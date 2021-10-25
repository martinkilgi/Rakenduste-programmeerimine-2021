import { POST_ADD, POST_REMOVE, POST_UPDATE, USER_LOGIN, USER_LOGOUT } from "./actions";

const postReducer = (state, action) => {
    switch(action.type) {
        case POST_ADD:
            return {
                ...state,
                data: state.data.concat(action.payload)
            };
        case POST_REMOVE:
            return {
                ...state,
                data: state.data.filter(post => post.id !== action.payload)
            };
        //kodutoona uue listi vastu votmine maybe
        case POST_UPDATE:
            return {
                ...state,
                data: state.data.filter(post => post.id !== action.payload).concat(action.payload)
            };
        default:
            return state
    }
}

const authReducer = (state, action) => { 
    switch(action.type) {
        case USER_LOGIN:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            }
        case USER_LOGOUT:
            return {
                ...state,
                token: null,
                user: null
            }
        default:
            return state
    }
}

export { postReducer, authReducer }