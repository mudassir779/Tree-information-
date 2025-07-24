import Blogs from "./components/Blogs.jsx"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./Pages/Home.jsx"
import ContactUS from "./Pages/ContactUs.jsx"
import AboutUs from "./Pages/AboutUs.jsx"
import PrivacyPolicies from "./Pages/PrivacyPolicies.jsx"
function App() {
  return (
      <div className="">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about-us" element={<AboutUs/>}></Route>
          <Route path="/services" element={<h1>Services</h1>}></Route>
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
