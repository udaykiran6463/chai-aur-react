import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const { userName } = useParams();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-600 text-white">
            <div className="bg-gray-800 p-8 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">User Profile</h1>
                <p className="text-lg">Username: <span className="text-indigo-400">{userName? userName: 'None'}</span></p>
            </div>
        </div>
    );
}

export default User;
