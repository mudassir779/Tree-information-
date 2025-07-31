import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const EditBlogs = () => {
  const backendLink = useSelector((state) => state.prod.link);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const getBlogs = async () => {
    try {
      const response = await axios.get(`${backendLink}/api/blog/get-blogs`);
      setBlogs(response.data.blog);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };
  // delete blog

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`${backendLink}/api/blog/delete-blog/${id}`);
      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Blogs</h1>
        <Link
          to="/admin-dashboard/add-blog"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Add New Blog
        </Link>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search blogs by title or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="text-center py-4">Loading blogs...</div>
          ) : (
            blogs.filter(blog => 
              blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
              blog.category.title.toLowerCase().includes(searchTerm.toLowerCase())
            ).map((item) => (
              <div key={item._id} className="p-4 border-b hover:bg-gray-50 transition-colors">
                <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                <p className="text-gray-600">{item.description.slice(0, 100)}...</p>
                <div className="mt-2">
                  <Link
                    to={`/admin-dashboard/update-blog/${item._id}`}
                    className="text-blue-600 hover:underline mr-4"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={deleteBlog.bind(null, item._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default EditBlogs;