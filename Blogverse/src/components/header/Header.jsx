import React from 'react';
import { useDispatch } from 'react-redux';
import authServices from '../../appwrite/auth';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LogoutBtn, Container, Logo } from '../index.components';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    
    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
    ];

    return (
        <header className='py-3 shadow bg-[#141313] text-white'>
            <Container>
                <nav className='flex items-center justify-between'>
                    <div className='mr-4'> 
                        <Logo /> 
                    </div>
                    <ul className='flex space-x-6 items-center'>
                        {
                            navItems.map((item) => (
                                item.active ? (
                                    <li key={item.name}>
                                        <NavLink
                                            to={item.slug}
                                            className={({ isActive }) =>
                                                `px-4 py-2 text-xl transition-all duration-300 ease-in-out ${isActive ? 'text-rose-500' : 'text-white hover:text-yellow-100'}`}>
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ) : null
                            ))
                        }
                        {authStatus && (
                            <li className='ml-4'>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
