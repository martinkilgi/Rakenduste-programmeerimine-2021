import React from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

function Header() {

    const {Header, Footer, Content} = Layout;

    return (
        <Header>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key='home'>
                    <Link to='/'>
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key='posts'>
                    <Link to='/posts'>
                        Add Posts
                    </Link>
                </Menu.Item>
                <Menu.Item key='showposts'>
                    <Link to='/showposts'>
                        See posts
                    </Link>
                </Menu.Item>
                <Menu.Item key='login'>
                    <Link to='/login'>
                        Login
                    </Link>
                </Menu.Item>
                <Menu.Item key='register'>
                    <Link to='/register'>
                        Register
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
       
    )
}

export default Header
