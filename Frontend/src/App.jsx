import Blogs from "./components/Blogs.jsx"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
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

function App() {
  return (
      <div className="">
        <Header />
        <ScrolltoTop/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about-us" element={<AboutUs/>}></Route>
          <Route path="/services" element={<h1>Services</h1>}></Route>
          <Route path="/services/tree-removal" element={<TreeRemoval/>}></Route>
          <Route path="/services/tree-trimming-pruning" element={<TreeTrimming/>}></Route>
          <Route path="/services/deep-root-fertilization" element={<DeepRootFertilization/>}></Route>
          <Route path="/services/structural-pruning" element={<StructuralPruning/>}></Route>
          <Route path="/services/land-clearing" element={<LandClearing/>}></Route>
          <Route path="/services/storm-clean-up" element={<StormCleanUp/>}></Route>
          <Route path="/services/commercial-tree-services" element={<CommercialTreeServices/>}></Route>
          
          <Route path="/service-areas" element={<h1>Service Areas</h1>}></Route>
          <Route path="/photo-gallery" element={<h1>Photo Gallery</h1>}></Route>
          <Route path="/contact-us" element={<ContactUS/>}></Route>
          <Route path="/blog" element={<Blogs/>}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicies/>}></Route>
        </Routes>
        <Footer/>
      </div>
  )
}

export default App
