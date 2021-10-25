import axios from 'axios';
import {useState} from 'react'
import {Layout} from "antd"

function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {Content} = Layout;

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8081/api/auth/signup", {
            firstName,
            lastName,
            email,
            password
        }).then((response) => {
            console.log("see on response" + response);
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
                        <button type="submit">Register</button>
                    </form>
                </div>
            </Content>
        </Layout>
        
    )
}

export default Register
