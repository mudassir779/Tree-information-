import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Blogs = () => {
    const backendLink = useSelector((state) => state.prod.link);
    console.log(backendLink)
    const [blogs, setBlogs] = useState([]);

    const getBlogs = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', { withCredentials: true });
            setBlogs(response.data); // Set the data from the response
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-4">
            {blogs.length > 0 ? (
                blogs.map((item) => (
                    <div key={item.id} className="mb-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h1 className="text-xl font-bold mb-2">{item.title}</h1>
                        <p className="text-gray-700">{item.body}</p>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">Loading...</p> // Optional loading state
            )}
        </div>
    );
};

export default Blogs;