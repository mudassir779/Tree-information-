import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const BlogDescription = () => {
  const [categories, setCategories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [description, setDescription] = useState(null);
  const backendLink = useSelector((state) => state.prod.link);
  const { id } = useParams();
  const location = useLocation();

  const getDescriptionById = async () => {
    try {
      const response = await axios.get(`${backendLink}/api/blog/get-description/${id}`);
      setDescription(response.data.blog);
    } catch (err) {
      console.error("Error fetching blog description:", err);
    }
  };

  const getRecentPosts = async () => {
    try {
      const response = await axios.get(`${backendLink}/api/blog/get-blogs`);
      setRecentPosts(response.data.blog);
    } catch (error) {
      console.error("Error fetching recent posts:", error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(`${backendLink}/api/category/get-category`);
      setCategories(response.data.category);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getDescriptionById();
    getRecentPosts();
    getCategories();
  }, [id]);

  return (
    <div className="container mx-auto mb-20 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {description && (
            <div>
              <img src={`${backendLink}/${description.image}`} alt={description.title} className="w-full h-auto" />
              <h2 className="text-2xl font-semibold my-4">{description.title}</h2>
              <p className="text-gray-600 mb-4">{description.content}</p>
              <span className="text-sm text-gray-500">
                Posted on: {new Date(description.createdAt).toLocaleDateString()}
              </span>
              <div className="mt-6">
                <p className="text-gray-700">{description.description}</p>
              </div>
            </div>
          )}
        </div>

        <div className="lg:w-1/4 space-y-6">
          <div className="bg-white shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4">
            <h3 className="text-lg font-bold text-center text-gray-800">Contact Us Today!</h3>
            <a href="tel:812-457-3433" className="block text-center text-xl text-green-600 font-bold mt-2">812-457-3433</a>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
            <h3 className="text-md font-bold bg-green-600 text-white mb-4 px-5 py-2">Recent Posts</h3>
            <ul className="space-y-2">
              {recentPosts.slice(0, 5).map((item, key) => (
                <li key={key}>
                  <a
                    href={item.path}
                    className={`block px-3 font-semibold rounded transition ${
                      location.pathname === item.path
                        ? "bg-green-100 text-green-700"
                        : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
            <h3 className="text-md font-bold bg-green-600 text-white mb-4 px-5 py-2">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={`/category/${category._id}`}
                    className={`block px-3 font-semibold rounded transition ${
                      location.pathname === `/category/${category._id}`
                        ? "bg-green-100 text-green-700"
                        : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                    }`}
                  >
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;