import { useState } from 'react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'users', name: 'Users', icon: '👥' },
    { id: 'products', name: 'Products', icon: '🛍️' },
    { id: 'orders', name: 'Orders', icon: '📦' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
  ];

  const stats = [
    { title: 'Total Users', value: '2,345', change: '+12%', trend: 'up' },
    { title: 'Total Orders', value: '1,234', change: '+5%', trend: 'up' },
    { title: 'Total Revenue', value: '$34,567', change: '+8%', trend: 'up' },
    { title: 'Pending Orders', value: '56', change: '-2%', trend: 'down' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition duration-300 ease-in-out 
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}
      >
        <div className="flex items-center justify-center h-16 px-4 bg-blue-600">
          <h1 className="text-xl font-bold text-white">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          <ul>
            {menuItems.map((item) => (
              <li key={item.id} className="px-2 py-1">
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center w-full px-4 py-2 text-left rounded-lg transition-colors 
                  ${activeTab === item.id ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between h-16 px-4 bg-white shadow-sm">
          <button 
            className="p-1 rounded-md lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="flex items-center space-x-4">
            <button className="p-1 relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              A
            </div>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 overflow-y-auto p-4">
          <h2 className="text-2xl font-semibold mb-6 capitalize">{activeTab}</h2>
          
          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <div className={`flex items-center mt-2 text-sm ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d={stat.trend === 'up' ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Recent activity */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <button className="text-blue-600 text-sm">View All</button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">New order #{1000 + item} received</p>
                    <p className="text-gray-500 text-sm">Just now</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center justify-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                  <svg className="w-6 h-6 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span className="text-sm">Add Product</span>
                </button>
                <button className="flex flex-col items-center justify-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                  <svg className="w-6 h-6 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm">Add User</span>
                </button>
                <button className="flex flex-col items-center justify-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                  <svg className="w-6 h-6 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span className="text-sm">Create Report</span>
                </button>
                <button className="flex flex-col items-center justify-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                  <svg className="w-6 h-6 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-sm">Process Orders</span>
                </button>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Recent Users</h3>
              <div className="space-y-3">
                {['John Doe', 'Jane Smith', 'Robert Johnson', 'Emily Davis'].map((user, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                      {user.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{user}</p>
                      <p className="text-gray-500 text-sm">Joined 2 days ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;