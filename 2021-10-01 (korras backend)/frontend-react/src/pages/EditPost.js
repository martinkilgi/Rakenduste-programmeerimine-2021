import 'antd/dist/antd.css';
import '../css/Posts.css';
import axios from 'axios';
import {useState, useContext, useRef, useEffect} from 'react'
import {Context} from '../store';
import {addPost, removePost, updatePosts} from '../store/actions'
import { Layout } from 'antd';
import { useParams } from 'react-router-dom'

function EditPost() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [editablePost, setEditablePost] = useState();
    const {handle} = useParams();
    
    const [state, dispatch] = useContext(Context);
    const inputRef = useRef(null);
    const {Content} = Layout;

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    useEffect(() => {
        
        
        if(handle !== undefined) {

            axios.get('http://localhost:8081/api/post/onepost/' + handle)
            .then((response) => {
                const resp = response.data;
                console.log(JSON.stringify(resp));
                setEditablePost(resp);
            }, (error) => {
                console.log(error);
            });

            console.log(handle);

        }
    }, [handle])

    const handleSubmit = (e) => {
        e.preventDefault();

        updatePost();

        setTitle("");

        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    const updatePost = () => {

        console.log(editablePost[0]._id);

        const newPost = {
            id: editablePost[0]._id,
            title: title ? title : editablePost[0].title,
            description: description ? description : editablePost[0].description,
            user: state.auth.user,
            today: today.toLocaleDateString()
            
        }

        axios.put(`http://localhost:8081/api/post/update/${handle}`, {
            post: newPost
        })
        .then((response) => {
            const resp = response.data;
            console.log(JSON.stringify(resp));
        }, (error) => {
            console.log(error);
        });


        dispatch(removePost(editablePost.id))

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
                        <input type="text" onChange={e => {setTitle(e.target.value)}} autoFocus/>
                        <h2>Post Description</h2>
                        <input type="text" onChange={e => {setDescription(e.target.value)}} autoFocus/>
                        <br />
                        <button type='submit'>Submit</button>
                    </form>
                    </div>
                </div>
            </Content>
        </Layout>
        
    )
}

export default EditPost
