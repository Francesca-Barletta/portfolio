import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import AboutPage from "./pages/AboutPage"
import ProjectPage from "./pages/ProjectPage"
import Footer from "./components/Footer"
import SingleProject from "./pages/SingleProject"
import ErrorPage from "./pages/ErrorPage"
import Sidebar from "./components/Sidebar"

function App() {


  return (
  

      <Router className="App">
        <Navbar/>
        <Sidebar/>
      <Routes>
        <Route path="/" element ={<Homepage/>}/>
        <Route path="/about" element ={<AboutPage/>}/>
        <Route path="/projects" element ={<ProjectPage/>}/>
        <Route path="/projects/:id" element={<SingleProject/>}/>
        <Route path="*" element={<ErrorPage/>}/>

      </Routes>
      <Footer/>
      </Router>


  )
}

export default App
