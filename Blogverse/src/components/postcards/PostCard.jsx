import React from 'react'
import service from '../../appwrite/appwrite.config'
import { Link, NavLink } from 'react-router-dom'


function PostCard({
    $id, title, coverImage
}) {
    return (
        <div>
            <Link to={`/post/${$id}`}>
                <div className='w-full bg-gray-100 rounded-xl p-4 '>
                    <div className='w-full justify-center mb-4'>
                        <img src={service.getFilePreview(coverImage)} alt={title} className='rounded-xl' />
                    </div>
                    <h2 className='text-xl font-bold'>{title}</h2>
                </div>
            </Link>
        </div>
    )
}

export default PostCard
