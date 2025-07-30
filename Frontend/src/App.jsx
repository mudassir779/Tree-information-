import Blogs from "./components/Blogs.jsx"
import { Route, Routes } from "react-router-dom"

import Home from "./Pages/Home.jsx"
import ContactUS from "./Pages/ContactUs.jsx"
import AboutUs from "./Pages/AboutUs.jsx"
import PrivacyPolicies from "./Pages/PrivacyPolicies.jsx"
import TreeRemoval from "./Pages/TreeRemoval.jsx"
import TreeTrimming from "./Pages/TreeTrimming.jsx"
import DeepRootFertilization from "./Pages/DeepRootFertilizaion.jsx"
import StructuralPruning from "./Pages/StructuralPruning.jsx"
import LandClearing from "./Pages/LandClearing.jsx"
import StormCleanUp from "./Pages/StormCleanUp.jsx"
import CommercialTreeServices from "./Pages/CommercialTreeServices.jsx"
import ScrolltoTop from "./components/ScrolltoTop.jsx"
import Services from "./Pages/Services.jsx"
import ServiceArea from "./Pages/ServiceArea.jsx"
import TarponSpring from "./Pages/TarponSpring.jsx"
import ClearWater from "./Pages/ClearWater.jsx"
import Dunedin from "./Pages/Dunedin.jsx"
import NewPortRichey from "./Pages/NewPortRichey.jsx"
import Oldsmar from "./Pages/Oldsmar.jsx"
import PalmHarbor from "./Pages/PalmHarbor.jsx"
import SafetyHarbor from "./Pages/SafetyHarbor.jsx"
import AdminLogin from "./Pages/AdminPanel/AdminLogin.jsx"
import MainLayout from "./layouts/MainLayout.jsx"
import AdminLayout from "./layouts/AdminLayouts.jsx"
import AdminDashboard from "./components/Admin/AdminDashboard.jsx"
import Dashboard from "./components/Admin/Dashboard.jsx"
import AddBlog from "./components/Admin/AddBlog.jsx"
import EditBlogs from "./components/Admin/EditBlogs.jsx"
import UpdateBlog from "./components/Admin/UpdateBlog.jsx"
import DeleteCategory from "./components/Admin/DeleteCategory.jsx"
import AddCategory from "./components/Admin/AddCategory.jsx"
import PhotoGallery from "./Pages/PhotoGallery.jsx"
import JobRequests from "./components/Admin/JobRequests.jsx"
function App() {
  return (
    <div className="">

      <ScrolltoTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/testimonials" element={<h1>Testimonials</h1>} />
          <Route path="/services" element={<Services />}>
            <Route index element={<TreeRemoval />} />
            <Route path="/services/tree-removal-tarpon-springs-fl/" element={<TreeRemoval />} />
            <Route path="/services/tree-trimming-pruning-tarpon-springs-fl/" element={<TreeTrimming />} />
            <Route path="/services/deep-root-fertilization-tarpon-springs-fl/" element={<DeepRootFertilization />} />
            <Route path="/services/structural-pruning-tarpon-springs-fl/" element={<StructuralPruning />} />
            <Route path="/services/land-clearing-tarpon-springs-fl/" element={<LandClearing />} />
            <Route path="/services/storm-clean-up-tarpon-springs-fl/" element={<StormCleanUp />} />
            <Route path="/services/commercial-tree-services-tarpon-springs-fl/" element={<CommercialTreeServices />} />
          </Route>
          <Route path="/service-areas" element={<ServiceArea />}>
            <Route index element={<TarponSpring />} />
            <Route path="/service-areas/" element={<TarponSpring />} />
            <Route path="/service-areas/tree-service-clearwater-fl/" element={<ClearWater />} />
            <Route path="/service-areas/tree-service-dunedin-fl/" element={<Dunedin />} />
            <Route path="/service-areas/tree-service-new-port-richey-fl/" element={<NewPortRichey />} />
            <Route path="/service-areas/tree-service-oldsmar-fl/" element={<Oldsmar />} />
            <Route path="/service-areas/tree-service-palm-harbor-fl/" element={<PalmHarbor />} />
            <Route path="/service-areas/tree-service-safety-harbor-fl/" element={<SafetyHarbor />} />
          </Route>
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/contact-us" element={<ContactUS />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicies />} />
        </Route>


        <Route path="/admin-login" element={<AdminLogin />} />
          <Route element={<AdminLayout />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-dashboard/dashboard" element={<Dashboard />} />
          <Route path="/admin-dashboard/add-blog" element={<AddBlog />} />
          <Route path="/admin-dashboard/edit-blogs" element={<EditBlogs />} />
          <Route path="/admin-dashboard/update-blog/:id" element={<UpdateBlog />} />
          <Route path="/admin-dashboard/add-category" element={<AddCategory />} />
          <Route path="/admin-dashboard/delete-category" element={<DeleteCategory />} />
          <Route path="/admin-dashboard/job-requests" element={<JobRequests />} />
        </Route>

      </Routes>

    </div>
  )
}

export default App
