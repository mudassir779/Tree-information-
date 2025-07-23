import { Route, Routes } from "react-router-dom"
import Header from "./components/Header.jsx"
function App() {
  return (
      <div className="">
        <Header />
        Welcome to Tree Project
        <Routes>
          <Route path="/" element={<h1>Home</h1>}></Route>
          <Route path="/about-us" element={<h1>About Us</h1>}></Route>
          <Route path="/services" element={<h1>Services</h1>}></Route>
          <Route path="/service-areas" element={<h1>Service Areas</h1>}></Route>
          <Route path="/photo-gallery" element={<h1>Photo Gallery</h1>}></Route>
          <Route path="/contact-us" element={<h1>Contact Us</h1>}></Route>
          <Route path="/blog" element={<h1>Blogs</h1>}></Route>
        </Routes>
      </div>
  )
}

export default App
