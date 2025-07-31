import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalCategories: 0,
    pendingJobs: 0,
    inProgressJobs: 0,
    completedJobs: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      setTimeout(() => {
        setStats({
          totalBlogs: 24,
          totalCategories: 8,
          pendingJobs: 5,
          inProgressJobs: 3,
          completedJobs: 12,
        });
      }, 500);
    };
    fetchStats();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Blogs"
          value={stats.totalBlogs}
          icon="📝"
          link="/admin-dashboard/edit-blogs"
        />
        <StatCard
          title="Total Categories"
          value={stats.totalCategories}
          icon="🏷️"
          link="/admin-dashboard/add-category"
        />
        <StatCard
          title="Pending Jobs"
          value={stats.pendingJobs}
          icon="⏳"
          link="/admin-dashboard/job-requests"
          color="yellow"
        />
        <StatCard
          title="Completed Jobs"
          value={stats.completedJobs}
          icon="✅"
          link="/admin-dashboard/job-requests"
          color="green"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <QuickAction
            icon="✍️"
            title="Add New Blog"
            link="/admin-dashboard/add-blog"
          />
          <QuickAction
            icon="🏷️"
            title="Add Category"
            link="/admin-dashboard/add-category"
          />
          <QuickAction
            icon="📋"
            title="View Job Requests"
            link="/admin-dashboard/job-requests"
          />
          <QuickAction
            icon="📝"
            title="Edit Blogs"
            link="/admin-dashboard/edit-blogs"
          />
        </div>
      </div>

      <div className='w-1/4 mx-auto flex justify-center'>
        <button
          className="group relative w-full flex hover:cursor-pointer justify-center py-2 px-4 border border-transparent text-xl font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          onClick={ handleLogout }>Logout</button>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <ActivityItem
            icon="📝"
            title="New blog created"
            time="2 minutes ago"
          />
          <ActivityItem
            icon="💼"
            title="New job request received"
            time="15 minutes ago"
          />
          <ActivityItem
            icon="✅"
            title="Job marked as completed"
            time="1 hour ago"
          />
          <ActivityItem
            icon="🏷️"
            title="New category added"
            time="2 hours ago"
          />
        </div>
      </div>
    </div>
  );
};

// Reusable Stat Card Component
const StatCard = ({ title, value, icon, link, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    red: 'bg-red-100 text-red-600',
  };

  return (
    <Link to={link}>
      <div className={`${colorClasses[color]} p-4 rounded-lg shadow hover:shadow-md transition-shadow`}>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
    </Link>
  );
};

// Reusable Quick Action Component
const QuickAction = ({ icon, title, link }) => {
  return (
    <Link to={link}>
      <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
        <span className="text-2xl mb-2">{icon}</span>
        <p className="text-sm font-medium text-center">{title}</p>
      </div>
    </Link>
  );
};

// Reusable Activity Item Component
const ActivityItem = ({ icon, title, time }) => {
  return (
    <div className="flex items-start p-2 hover:bg-gray-50 rounded transition-colors">
      <span className="text-xl mr-3 mt-1">{icon}</span>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
    </div>
  );
};

export default AdminDashboard;