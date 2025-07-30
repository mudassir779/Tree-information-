import { useState, useEffect } from 'react';

const JobRequests = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    // Simulate fetching jobs from API
    const fetchJobs = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        // Mock data
        const mockJobs = [
          { 
            id: 1, 
            title: 'Web Development', 
            client: 'John Smith', 
            email: 'john@example.com', 
            status: 'pending', 
            date: '2023-05-15', 
            description: 'Need a website for my business with e-commerce functionality.' 
          },
          { 
            id: 2, 
            title: 'Mobile App Design', 
            client: 'Sarah Johnson', 
            email: 'sarah@example.com', 
            status: 'in-progress', 
            date: '2023-05-10', 
            description: 'Looking for a designer to create UI/UX for my mobile app.' 
          },
          { 
            id: 3, 
            title: 'SEO Optimization', 
            client: 'Mike Brown', 
            email: 'mike@example.com', 
            status: 'completed', 
            date: '2023-05-05', 
            description: 'Need help improving my website search rankings.' 
          },
          { 
            id: 4, 
            title: 'Content Writing', 
            client: 'Emily Davis', 
            email: 'emily@example.com', 
            status: 'pending', 
            date: '2023-05-01', 
            description: 'Looking for a writer to create blog posts about technology.' 
          },
        ];
        setJobs(mockJobs);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = filter === 'all' 
    ? jobs 
    : jobs.filter(job => job.status === filter);

  const updateStatus = (id, newStatus) => {
    setJobs(jobs.map(job => 
      job.id === id ? { ...job, status: newStatus } : job
    ));
    setSelectedJob(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Job Requests</h1>

      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-md ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`px-4 py-2 rounded-md ${filter === 'pending' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
        >
          Pending
        </button>
        <button
          onClick={() => setFilter('in-progress')}
          className={`px-4 py-2 rounded-md ${filter === 'in-progress' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          In Progress
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded-md ${filter === 'completed' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
        >
          Completed
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Job List */}
        <div className="md:col-span-1 bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="font-semibold">Job List ({filteredJobs.length})</h2>
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: '600px' }}>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div 
                  key={job.id} 
                  onClick={() => setSelectedJob(job)}
                  className={`p-4 border-b cursor-pointer hover:bg-gray-50 
                    ${selectedJob?.id === job.id ? 'bg-blue-50' : ''}`}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{job.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full 
                      ${job.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                        job.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 
                        'bg-green-100 text-green-800'}`}
                    >
                      {job.status.replace('-', ' ')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{job.client}</p>
                  <p className="text-xs text-gray-400 mt-1">{job.date}</p>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">
                No jobs found
              </div>
            )}
          </div>
        </div>

        {/* Job Details */}
        <div className="md:col-span-2 bg-white rounded-lg shadow overflow-hidden">
          {selectedJob ? (
            <>
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Job Details</h2>
                  <div className="flex space-x-2">
                    {selectedJob.status !== 'pending' && (
                      <button
                        onClick={() => updateStatus(selectedJob.id, 'pending')}
                        className="px-3 py-1 text-xs bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200"
                      >
                        Mark as Pending
                      </button>
                    )}
                    {selectedJob.status !== 'in-progress' && (
                      <button
                        onClick={() => updateStatus(selectedJob.id, 'in-progress')}
                        className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded hover:bg-blue-200"
                      >
                        Mark as In Progress
                      </button>
                    )}
                    {selectedJob.status !== 'completed' && (
                      <button
                        onClick={() => updateStatus(selectedJob.id, 'completed')}
                        className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded hover:bg-green-200"
                      >
                        Mark as Completed
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold">{selectedJob.title}</h3>
                  <div className="flex items-center mt-2">
                    <span className={`text-xs px-2 py-1 rounded-full mr-2
                      ${selectedJob.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                        selectedJob.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 
                        'bg-green-100 text-green-800'}`}
                    >
                      {selectedJob.status.replace('-', ' ')}
                    </span>
                    <span className="text-sm text-gray-500">{selectedJob.date}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Client</h4>
                  <p>{selectedJob.client}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Email</h4>
                  <p>{selectedJob.email}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Description</h4>
                  <p className="whitespace-pre-line">{selectedJob.description}</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Select a job to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobRequests;