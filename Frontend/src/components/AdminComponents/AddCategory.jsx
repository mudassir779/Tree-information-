import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AddCategory = () => {
  const [categories, setCategories] = useState([
    'Technology',
    'Travel',
    'Food',
    'Lifestyle'
  ]);
  const [newCategory, setNewCategory] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleAddCategory = (e) => {
    e.preventDefault();
    const trimmedCategory = newCategory.trim();
    
    if (!trimmedCategory) {
      setError('Category name cannot be empty');
      return;
    }
    
    if (categories.includes(trimmedCategory)) {
      setError('Category already exists');
      return;
    }
    
    setCategories([...categories, trimmedCategory]);
    setNewCategory('');
    setError('');
    setSuccess(`"${trimmedCategory}" added successfully!`);
    inputRef.current.focus();
  };

  const handleDeleteCategory = (categoryToDelete) => {
    setCategories(categories.filter(category => category !== categoryToDelete));
    setSuccess(`"${categoryToDelete}" deleted successfully!`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddCategory(e);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">Category Management</h2>
        <p className="text-gray-500 text-sm">Add and manage your blog categories</p>
      </div>
      
      <form onSubmit={handleAddCategory} className="mb-8">
        <div className="flex flex-col space-y-2">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={newCategory}
              onChange={(e) => {
                setNewCategory(e.target.value);
                setError('');
              }}
              onKeyDown={handleKeyDown}
              placeholder="Enter new category name"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              aria-label="New category name"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add
            </button>
          </div>
          <AnimatePresence>
            {error && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-1 text-sm text-red-600"
              >
                {error}
              </motion.p>
            )}
            {success && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-1 text-sm text-green-600"
              >
                {success}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </form>

      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium text-gray-700">Existing Categories</h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {categories.length} {categories.length === 1 ? 'category' : 'categories'}
          </span>
        </div>
        
        {categories.length === 0 ? (
          <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p className="mt-2 text-gray-500">No categories yet. Add your first one above.</p>
          </div>
        ) : (
          <motion.ul className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
            <AnimatePresence>
              {categories.map((category) => (
                <motion.li 
                  key={category}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-between py-3 px-4 bg-white hover:bg-gray-50 transition duration-150"
                >
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                    <span className="text-gray-800 font-medium">{category}</span>
                  </div>
                  <button
                    onClick={() => handleDeleteCategory(category)}
                    className="text-gray-400 hover:text-red-500 focus:outline-none transition duration-150 p-1 rounded-full hover:bg-red-50"
                    aria-label={`Delete ${category}`}
                    title="Delete category"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default AddCategory;