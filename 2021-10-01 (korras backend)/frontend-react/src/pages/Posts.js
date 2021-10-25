import 'antd/dist/antd.css';
import '../css/Posts.css';
import Post from '../components/Post';
import {useState, useContext, useRef, useEffect} from 'react'
import {Context} from '../store';
import {addPost, removePost, updatePosts} from '../store/actions'
import { Layout } from 'antd';

function Posts() {

    const [title, setTitle] = useState("");
    
    const [state, dispatch] = useContext(Context);
    const inputRef = useRef(null);
    const {Content} = Layout;

    useEffect(() => {
        
        

        console.log(state.posts.data.map(e => <li key={e.id}>{e.id} {e.title}</li>));

        console.log(state.auth);
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
            title: title
        }

        // Salvestame andmebaasi ja kui on edukas,
        // siis teeme dispatchi ja uuendame state lokaalselt

        dispatch(addPost(newPost))
    }

    return (
        <Layout className="layout">
            <Content style={{ padding: '0 50px', marginTop: '50px'}}>
                <div className="site-layout-content">
                    <div style={{ textAlign: "center"}}>
                    <form onSubmit={handleSubmit}>
                        <input ref={inputRef} type="text" value={title} onChange={e => {setTitle(e.target.value)}} autoFocus/>
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
