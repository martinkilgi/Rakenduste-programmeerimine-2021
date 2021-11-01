import {useContext, useEffect, useState} from 'react'
import { Layout, Table, Space } from 'antd';
import {Context} from '../store';
import {addPost, removePost, updatePosts} from '../store/actions'
import { Link } from 'react-router-dom';
import axios from'axios';

const Posttest = () => {

    const [state, dispatch] = useContext(Context);
    const [data, setData] = useState([]);
    const [respond, setRespond] = useState();
    

    useEffect(() => {

       console.log(state.posts.data);

       axios.get('http://localhost:8081/api/post')
        .then((response) => {
            const resp = response.data;
            console.log(JSON.stringify(resp));
            setRespond(resp);
            
        }, (error) => {
            console.log(error);
        });

    
    }, [])

    const columns = [
        {
            title: 'User',
            dataIndex: 'user',
            key: 'user',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Link to={`/edit-post/${record._id}`}>Edit</Link>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Table dataSource={respond} columns={columns} />;
        </div>
    )
}

export default Posttest;
