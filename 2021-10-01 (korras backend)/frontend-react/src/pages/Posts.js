import 'antd/dist/antd.css';
import '../css/Posts.css';
import Post from '../components/Post';
import axios from 'axios';
import {useState, useContext, useRef, useEffect} from 'react'
import {Context} from '../store';
import {addPost, removePost, updatePosts} from '../store/actions'
import { Layout } from 'antd';

function Posts() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const [state, dispatch] = useContext(Context);
    const inputRef = useRef(null);
    const {Content} = Layout;

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    useEffect(() => {
        
        

        console.log(state.posts.data.map(e => <li key={e.id}>{e.id} {e.title}</li>));

        console.log(state.auth.user);
        console.log(state.posts);


    }, [])

    //voite panna nuppu, et get latest from database vms (sync)

    const handleSubmit = (e) => {
        e.preventDefault();

        addNewPost();

        setTitle("");

        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    const addNewPost = () => {
        const newPost = {
            id: Date.now(),
            title: title,
            description: description,
            user: state.auth.user,
            today: today.toLocaleDateString()
            
        }

        axios.post('http://localhost:8081/api/post/create', {
            post: newPost
        })
        .then((response) => {
            const resp = response.data;
            console.log(JSON.stringify(resp));
        }, (error) => {
            console.log(error);
        });

        // Salvestame andmebaasi ja kui on edukas,
        // siis teeme dispatchi ja uuendame state lokaalselt

        console.log(newPost);

        dispatch(addPost(newPost))
    }

    return (
        <Layout className="layout">
            <Content style={{ padding: '0 50px', marginTop: '50px'}}>
                <div className="site-layout-content">
                    <div style={{ textAlign: "center"}}>
                    <form onSubmit={handleSubmit}>
                        <h2>Post Title</h2>
                        <input ref={inputRef} type="text" value={title} onChange={e => {setTitle(e.target.value)}} autoFocus/>
                        <h2>Post Description</h2>
                        <input ref={inputRef} type="text" value={description} onChange={e => {setDescription(e.target.value)}} autoFocus/>
                        <br />
                        <button type='submit'>Submit</button>
                    </form>
                        { state.posts.data.map(e => <li key={e.id}>
                            {e.id} {e.title}
                            <span style={{cursor: "pointer"}} onClick={() => dispatch(removePost(e.id))}>
                                &#128540;
                            </span>
                        </li>) }
                    </div>
                </div>
            </Content>
        </Layout>
        
    )
}

export default Posts
