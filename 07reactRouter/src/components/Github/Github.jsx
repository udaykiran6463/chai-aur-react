import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GithubProfile from './GithubProfile';
import { useLoaderData } from 'react-router-dom';




function Github() {
    const {userName} = useParams()


    console.log(userName);
    

    return(
        <div className=''>
            {userName?<GithubProfile userName={userName} />: <span className='h-screen text-white bg-slate-600 text-center flex items-center justify-center font-semibold'>Enter User in URI"</span> }
        </div>
    )
}

export default Github;
