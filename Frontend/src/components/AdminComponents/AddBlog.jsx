import React, {  useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
const AddBlog = () => {
  const backendLink = useSelector((state) => state.prod.link);
  
 
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    image: null
  });

  const categories = [
    'Technology',
    'Travel',
    'Food',
    'Lifestyle',
    'Health & Wellness',
    'Business',
    'Personal Development'
  ];

// const getCategories = async () => {
//   try {
//     const response = await axios.get(`${backendLink}/api/category/get-category`);
//     if (response.data.success) {
//       setCategories(response.data.categories);
//     } else {
//       console.error('Failed to fetch categories');
//     }
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//   }
// };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      image: e.target.files[0]
    }));
  };
 const handleSubmit = async (e) => {
 
    e.preventDefault();

    try{
      const form = new FormData();
      form.append('title', formData.title);
      form.append('description', formData.description);
      form.append('category', formData.category);
      form.append('image', formData.image);

      const response = await axios.post(`${backendLink}/api/blog/add-blog`, form);
      if (response.data.success) {
        alert('Blog added successfully!');
        setFormData({
          title: '',
          description: '',
          category: '',
          image: null
        });
      } else {
        alert(response.data.message || 'Failed to add blog');
      }
    }catch(error){
      console.error('Error:', error);
      alert('An error occurred while adding the blog');
    }
    
    // Add your form submission logic here
  };

  // useEffect(() => {
  //   getCategories();
  // }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Blog Post</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="6"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Featured Image <span className="text-red-500">*</span>
          </label>
          <div className="mt-1 flex items-center">
            <label className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Choose File
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="sr-only"
                required
              />
            </label>
            {formData.image && (
              <span className="ml-3 text-sm text-gray-500">{formData.image.name}</span>
            )}
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        >
          Publish Blog Post
        </button>
      </form>
    </div>
  );
};

export default AddBlog;