import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { FiZoomIn, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const JobRequests = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);
  const backendLink = useSelector((state) => state.prod.link);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const prevImage = () => setCurrentImageIndex(prev => (prev === 0 ? lightboxImages.length - 1 : prev - 1));
  const nextImage = () => setCurrentImageIndex(prev => (prev === lightboxImages.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await axios.get(`${backendLink}/api/request/get-requests`);
        const formattedJobs = data.requests.map((req) => ({
          id: req._id,
          title: req.Service_details?.PropertyType || 'Unknown Service',
          client: `${req.Contact_Details.Fname} ${req.Contact_Details.Lname}`,
          email: req.Contact_Details.Email,
          status: req.Status.toLowerCase().replace('_', '-'),
          date: new Date(req.createdAt).toISOString().split('T')[0],
          description: req.Service_details.Job_Details || 'No details provided.',
          images: req.Images.map(img => `${backendLink}/${img}`)
        }));
        setJobs(formattedJobs);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = filter === 'all' ? jobs : jobs.filter(job => job.status === filter);

  const updateStatus = async (id, newStatus) => {
    // Convert to proper enum format
    const enumMap = {
      'pending': 'Pending',
      'in-progress': 'In-Progress',
      'completed': 'Completed'
    };

    const enumStatus = enumMap[newStatus];

    try {
      await axios.put(`${backendLink}/api/request/update-request/${id}`, {
        Status: enumStatus
      });

      // Update local state
      const updatedJobs = jobs.map(job =>
        job.id === id ? { ...job, status: newStatus } : job
      );
      setJobs(updatedJobs);

      if (selectedJob?.id === id) {
        setSelectedJob(prev => ({ ...prev, status: newStatus }));
      }
    } catch (error) {
      console.error('Failed to update status:', error);
      alert('Failed to update job status. Please try again.');
    }
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

      {/* Filter Buttons */}
      <div className="flex space-x-2 mb-6">
        {['all', 'pending', 'in-progress', 'completed'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-md hover:cursor-pointer ${filter === status
              ? status === 'pending'
                ? 'bg-yellow-500 text-white'
                : status === 'in-progress'
                  ? 'bg-blue-500 text-white'
                  : status === 'completed'
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-600 text-white'
              : 'bg-gray-200'
              }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
          </button>
        ))}
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
                  className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${selectedJob?.id === job.id ? 'bg-blue-50' : ''
                    }`}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{job.title}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${job.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : job.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                        }`}
                    >
                      {job.status.replace('-', ' ')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{job.client}</p>
                  <p className="text-xs text-gray-400 mt-1">{job.date}</p>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">No jobs found</div>
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
                    {['pending', 'in-progress', 'completed'].map(
                      (status) =>
                        selectedJob.status !== status && (
                          <button
                            key={status}
                            onClick={() => updateStatus(selectedJob.id, status)}
                            className={`px-3 py-1 text-xs rounded hover:opacity-90 hover:cursor-pointer ${status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : status === 'in-progress'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-green-100 text-green-800'
                              }`}
                          >
                            Mark as {status.replace('-', ' ')}
                          </button>
                        )
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold">{selectedJob.title}</h3>
                  <div className="flex items-center mt-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full mr-2 ${selectedJob.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : selectedJob.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                        }`}
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

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Description</h4>
                  <p className="whitespace-pre-line">{selectedJob.description}</p>
                </div>

                {/* Uploaded Images */}
                {selectedJob.images?.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Uploaded Images</h4>
                    <div className="flex flex-wrap gap-4">
                      {selectedJob.images.map((imgUrl, index) => (
                        <div
                          key={index}
                          className="relative group w-32 h-32 cursor-pointer"
                          onClick={() => openLightbox(selectedJob.images, index)}
                        >
                          <img
                            src={imgUrl}
                            alt={`Uploaded ${index}`}
                            className="w-full h-full object-cover rounded border"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded">
                            <FiZoomIn className="text-white text-2xl" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Select a job to view details</p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white text-3xl hover:cursor-pointer">
            &times;
          </button>
          <button onClick={prevImage} className="absolute left-4 text-white text-3xl hover:cursor-pointer">
            <FiChevronLeft />
          </button>
          <img
            src={lightboxImages[currentImageIndex]}
            alt="Preview"
            className="max-w-3xl max-h-[80vh] object-contain rounded shadow-lg"
          />
          <button onClick={nextImage} className="absolute right-4 text-white text-3xl hover:cursor-pointer">
            <FiChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default JobRequests;
