
import { createContext, useReducer, useEffect } from 'react';
import {postReducer, authReducer} from './reducer.js';
import combineReducers from "react-combine-reducers"
import {addPost, removePost, updatePosts} from '../store/actions';
import axios from 'axios';


const initialPosts = {
    data: []
}

const initialAuth = {
    token: null,
    user: null
}

const [combinedReducer, initialState] = combineReducers({
    posts: [postReducer, initialPosts],
    auth: [authReducer, initialAuth]
})

export const Context = createContext(initialState)


function Store ({ children }) {

    const [state, dispatch] = useReducer(combinedReducer, initialState);

    useEffect(() => {

        axios.get('http://localhost:8081/api/post')
        .then((response) => {
            const resp = response.data;
            console.log(JSON.stringify(resp));
            dispatch(updatePosts(response.data));
        }, (error) => {
            console.log(error);
        });

    },[])
    

    return (
        <Context.Provider value={[ state, dispatch ]}>
            {children}
        </Context.Provider>
    )
}

export default Store;

