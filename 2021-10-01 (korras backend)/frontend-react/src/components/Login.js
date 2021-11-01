import "../css/Login.css"
import {useState, useContext} from 'react'
import {Context} from '../store';
import {loginUser, logoutUser} from '../store/actions'
import axios from 'axios';
import { Layout } from 'antd';

function Login() {

    const [data, setData] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [token, setToken] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [state, dispatch] = useContext(Context);

    const {Content} = Layout;

    const handleSubmit = (e) => {
        e.preventDefault();


        axios.post('http://localhost:8081/api/auth/login', {
            email: email,
            password: password
        })
        .then((response) => {
            const resp = response.data;
            console.log(JSON.stringify(resp));
            setToken(response.data.token);
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            console.log(token);
            console.log(firstName);
            console.log(lastName);
        }, (error) => {
            console.log(error);
        });

        const newUser = {
            token: token,
            user: firstName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }

        dispatch(loginUser(newUser));

        console.log(newUser);

    }


    return (
        <Layout>
            <Content>
                <div className="login" style={{ textAlign: "center"}}>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <h3>E-mail </h3>
                        <input type="email" value={email} onChange={e => {setEmail(e.target.value)}} autoFocus/>
                        <br />
                        <h3>Password</h3>
                        <input type="password" value={password} onChange={e => {setPassword(e.target.value)}} autoFocus/>
                        <br />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </Content>
        </Layout>
        
    )
}

export default Login
