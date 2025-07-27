import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const links = [
    { name: "Dashboard", path: "/admin-dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { name: "Add Blog", path: "/admin-dashboard/add-blogs", icon: "M12 6v6m0 0v6m0-6h6m-6 0H6" },
    { name: "Edit Blogs", path: "/admin-dashboard/edit-blogs", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" },
    { name: "Add Category", path: "/admin-dashboard/add-category", icon: "M12 4v16m8-8H4" },
    { name: "Categories", path: "/admin-dashboard/delete-category", icon: "M4 6h16M4 12h16M4 18h16" },
  ];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-green-800 to-green-900 w-64 text-white">
      {/* Logo/Header */}
      <div className="p-4 border-b border-green-700">
        <h2 className="text-2xl font-bold text-center">
          <span className="text-white">TreeCare</span>
          <span className="text-amber-400">Admin</span>
        </h2>
      </div>
      
      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-4">
          {links.map((item, i) => (
            <li key={i}>
              <Link 
                to={item.path} 
                className="flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-green-700 hover:bg-opacity-50 hover:pl-5 group"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-3 text-amber-300 group-hover:text-amber-200" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <span className="font-medium group-hover:text-white">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Logout Button */}
      <div className="p-4 border-t border-green-700">
        <button className="w-full flex items-center justify-center p-3 rounded-lg bg-amber-600 hover:bg-amber-700 transition-colors duration-300 shadow-md hover:shadow-lg">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;