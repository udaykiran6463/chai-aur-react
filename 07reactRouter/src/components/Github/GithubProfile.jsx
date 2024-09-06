import React, { useState, useEffect } from 'react';
import { FaLocationArrow, FaBuilding, FaTwitter, FaBlog } from 'react-icons/fa'; // Import icons

function GithubProfile({ userName }) {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch GitHub profile data
    const getData = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${userName}`);
            if (!response.ok) {
                throw new Error('User not found');
            }
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, [userName]);

    if (loading) return <div className="text-rose-500">Loading...</div>;
    if (error) return <div className="text-rose-500">Error: {error}</div>;

    if (!userData) return null;

    const { name, avatar_url, url, bio, public_repos, followers, following, location, blog, twitter_username, company } = userData;

    return (
        <div className="flex flex-col items-center justify-center h-[40rem] bg-gray-900 text-gray-100">
            <div className="w-full max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                    <img className="rounded-full border-2 border-rose-500" src={avatar_url} alt={`${name}'s avatar`} width="150" height="150" />
                    <div>
                        <h2 className="text-2xl font-bold text-purple-400">{name || userName}</h2>
                        <a href={url} className="text-white hover:underline">@{userName}</a>
                    </div>
                </div>

                <p className="text-gray-400 mb-4">{bio || "This profile has no bio"}</p>

                <div className="bg-gray-700 p-4 text-lg rounded-lg shadow-md mb-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                            <span className="block text-purple-500">Repos</span>
                            <span className="block text-lg font-bold text-white">{public_repos || "0"}</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-purple-500">Followers</span>
                            <span className="block text-lg font-bold text-white">{followers || "0"}</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-purple-500">Following</span>
                            <span className="block text-lg font-bold text-white">{following || "0"}</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-10 mb-4  text-gray-400">
                    <div className="flex items-center space-x-2">
                        <FaLocationArrow className="text-purple-500" />
                        <p><strong>Location:</strong> <span className='text-white'>{location || "Not Available"}</span></p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaBuilding className="text-purple-500" />
                        <p><strong>Company:</strong><span className='text-white'> {company || "Not Available"}</span></p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaBlog className="text-purple-500" />
                        <p>
                            <strong>Blog:</strong>{" "}
                            <a href={blog} className="text-white hover:underline">{blog? blog.substring(7,15) + "...":"Not Available"}</a>
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaTwitter className="text-purple-500" />
                        <p>
                            <strong>Twitter:</strong>{" "}
                            <a href={`https://twitter.com/${twitter_username}`} className="text-white hover:underline">@{twitter_username || "Not Available"}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GithubProfile;
