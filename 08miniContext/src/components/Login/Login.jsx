import React,{useState, useContext} from 'react'
import UserContext from '../../context/UserContext'

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({userName, password})
    }
    
    return (
        <div> 
            <h2>Login</h2>
            <input type="text" value = {userName}  onChange={(e)=> setUserName(e.target.value)}  placeholder='UserName' />
            <br />
            <br />
            <input type="text" value = {password}  onChange={(e)=> setPassword(e.target.value)}  placeholder='Password' />
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <br />
            <br />
        </div>
    )
}

export default Login