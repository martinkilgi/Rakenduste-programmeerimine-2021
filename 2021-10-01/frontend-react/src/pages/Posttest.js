import {useContext, useEffect, useState} from 'react'
import { Layout, Table } from 'antd';
import {Context} from '../store';
import {addPost, removePost, updatePosts} from '../store/actions'
import Post from '../components/Post'

const Posttest = () => {

    const [state, dispatch] = useContext(Context);
    const [data, setData] = useState([]);


    const src = [
        { key: '1', user: 'Gourav', text: 'testtext', date: 10 },
        { key: '2', user: 'Kartik', text: 'testtext', date: 20 },
        { key: '3', user: 'Madhu', text: 'testtext', date: 30 },
        { key: '4', user: 'Karu', text: 'testtext', date: 40 },
        { key: '5', user: 'Dinesh', text: 'testtext', date: 50 },
    ];

    const dataSource = state.posts.data.map(post => <Post key={post.id} user={post.id} text={post.title} date={Date.now()} />);
    
    

    useEffect(() => {

        setData(dataSource);

        //console.log(dataSource[0].props.user);
        //console.log(dataSource.props);
        //console.log(src);

    
    }, [])

    const columns = [
        {
            title: 'User',
            dataIndex: 'user',
            key: 'user',
        },
        {
            title: 'Post',
            dataIndex: 'text',
            key: 'text',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
    ];

    return (
        <div>
            <Table dataSource={src} columns={columns} />;
        </div>
    )
}

export default Posttest;
