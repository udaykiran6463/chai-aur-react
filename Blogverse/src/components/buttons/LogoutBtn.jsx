import React from 'react';
import authServices from '../../appwrite/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function LogoutBtn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        console.log('logout clicked');
        
        authServices.logout().then(() => {
            dispatch(logout());
        });
        navigate("/");
    };

    return (
        <div className=''>
            <button 
                onClick={logoutHandler} 
                className='px-[0.80rem] py-[0.30rem] rounded-full bg-blue-500 text-xl transition-all duration-300 ease-in-out hover:bg-blue-600 active:scale-[98%] ' >
                Logout ➜
            </button>
        </div>
    );
}

export default LogoutBtn;
