import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo({width = '100px'}) {
    return (
        <NavLink to='/'>
            <div className='text-[2.3rem] select-none text-white cursor-pointer '>Blog<span className='text-pink-500'>verse</span><span className='text-rose-500'>.</span> </div>
        </NavLink>
    )
}

export default Logo
