import React from 'react'
import { useContext } from 'react'
import UserContext from '../../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if(!user){
        return (
            <div>
                <div>Login Expected</div>
            </div>
        )
    }
    else{
        return (
            <div>
                <h1>welcome {user.userName}</h1>
            </div>
        )
    }
}

export default Profile