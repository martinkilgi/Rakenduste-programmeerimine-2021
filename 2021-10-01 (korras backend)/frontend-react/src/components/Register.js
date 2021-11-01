import axios from 'axios';
import {useState} from 'react'
import {Layout} from "antd"
import { Button } from 'antd';

function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState("");

    const {Content} = Layout;

    const handleSubmit = (e) => {
        e.preventDefault();

        if(password !== passwordConfirm) {
            setError(<div style={{ color: "red"}}>
                <h3>Passwords don't match!</h3>
                </div>)
            return;
        } else {
            setError("");
        }

        axios.post("http://localhost:8081/api/auth/signup", {
            firstName,
            lastName,
            email,
            password
        }).then((response) => {
            console.log(JSON.stringify(response.data));
        })

        

    }


    return (
        <Layout>
            <Content>
                <div style={{ textAlign: "center"}}>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <h3>First Name </h3>
                        <input type="text" value={firstName} onChange={e => {setFirstName(e.target.value)}} autoFocus/>
                        <br />
                        <h3>Last Name </h3>
                        <input type="text" value={lastName} onChange={e => {setLastName(e.target.value)}} autoFocus/>
                        <br />
                        <h3>E-mail </h3>
                        <input type="email" value={email} onChange={e => {setEmail(e.target.value)}} autoFocus/>
                        <br />
                        <h3>Password </h3>
                        <input type="password" value={password} onChange={e => {setPassword(e.target.value)}} autoFocus/>
                        <br />
                        <h3>Password again</h3>
                        <input type="password" value={passwordConfirm} onChange={e => {setPasswordConfirm(e.target.value)}} autoFocus/>
                        <br />
                        <br />
                        <button type="submit">Register</button>
                        <br />
                        {error ? error : ""}
                    </form>
                </div>
            </Content>
        </Layout>
        
    )
}

export default Register
