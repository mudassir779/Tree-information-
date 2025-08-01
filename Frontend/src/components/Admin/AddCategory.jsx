import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const backendLink = useSelector((state) => state.prod.link);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendLink}/api/category/add-category`, {
        title: categoryName,
      });
      alert('Category added successfully:', response.data.category.message);
      setCategoryName(''); // Clear input after submission
    } catch (err) {
      console.error('Error adding category:', err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold text-center mb-6">Add New Category</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter category name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-200"
        >
          Add Category
        </button>
      </form>
    </div>
  );
}

export default AddCategory;