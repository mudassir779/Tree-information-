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
import NewPortRichey from "./Pages/NewPortRichey.JSX"
import Oldsmar from "./Pages/Oldsmar.jsx"
import PalmHarbor from "./Pages/PalmHarbor.jsx"
import SafetyHarbor from "./Pages/SafetyHarbor.JSX"
import AdminLogin from "./Pages/AdminPanel/AdminLogin.jsx"
import MainLayout from "./layouts/MainLayout.jsx"
import AdminLayout from "./layouts/AdminLayouts.jsx"
import AdminDashboard from "./components/AdminComponents/AdminDashboard.jsx"
import Dashboard from "./components/AdminComponents/Dashboard.jsx"
import AddBlog from "./components/AdminComponents/AddBlog.jsx"
import EditBlogs from "./components/AdminComponents/EditBlogs.jsx"
import UpdateBlog from "./components/AdminComponents/UpdateBlog.jsx"
import DeleteCategory from "./components/AdminComponents/DeleteCategory.jsx"
import AddCategory from "./components/AdminComponents/AddCategory.jsx"

function App() {
  return (
      <div className="">
        
        <ScrolltoTop/>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/services" element={<Services/>}>
              <Route index element={<TreeRemoval/>}/>
              <Route path="/services/tree-removal" element={<TreeRemoval/>}/>
              <Route path="/services/tree-trimming-pruning" element={<TreeTrimming/>}/>
              <Route path="/services/deep-root-fertilization" element={<DeepRootFertilization/>}/>
              <Route path="/services/structural-pruning" element={<StructuralPruning/>}/>
              <Route path="/services/land-clearing" element={<LandClearing/>}/>
              <Route path="/services/storm-clean-up" element={<StormCleanUp/>}/>
              <Route path="/services/commercial-tree-services" element={<CommercialTreeServices/>}/>
            </Route>
          


          </Route>
          
          
          <Route path="/service-areas" element={<ServiceArea/>}>
            <Route index element={<TarponSpring/>}/>
            <Route path="/service-areas/tarpon-springs" element={<TarponSpring/>}/>
            <Route path="/service-areas/clearwater" element={<ClearWater/>}/>
            <Route path="/service-areas/dunedin" element={<Dunedin/>}/>
            <Route path="/service-areas/new-port-richey" element={<NewPortRichey/>}/>
            <Route path="/service-areas/oldsmar" element={<Oldsmar/>}/>
            <Route path="/service-areas/palm-harbor" element={<PalmHarbor/>}/>
            <Route path="/service-areas/safety-harbor" element={<SafetyHarbor/>}/>
          
          
          </Route>
          <Route path="/photo-gallery" element={<h1>Photo Gallery</h1>}></Route>
          <Route path="/contact-us" element={<ContactUS/>}></Route>
          <Route path="/blog" element={<Blogs/>}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicies/>}></Route>


          <Route element={<AdminLayout/>}>
            <Route path="/admin-login" element={<AdminLogin/>}/>
            <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
              <Route index element={<Dashboard/>}/>
              <Route path="/admin-dashboard/add-blogs" element={<AddBlog />} />
              <Route path="/admin-dashboard/edit-blogs" element={<EditBlogs />} />
              <Route path="/admin-dashboard/update-blogs/:id" element={<UpdateBlog />} />
              <Route path="/admin-dashboard/delete-category" element={<DeleteCategory/>}/>
              <Route path="/admin-dashboard/add-category" element={<AddCategory/>}/>
            </Route>
        
          </Routes>
        
      </div>
  )
}

export default App
