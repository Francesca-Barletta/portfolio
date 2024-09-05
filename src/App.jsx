import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import AboutPage from "./pages/AboutPage"
import ProjectPage from "./pages/ProjectPage"

function App() {


  return (
  

      <Router className="App">
        <Navbar/>
      <Routes>
        <Route path="/" element ={<Homepage/>}/>
        <Route path="/about" element ={<AboutPage/>}/>
        <Route path="/projects" element ={<ProjectPage/>}/>

      </Routes>
      </Router>


  )
}

export default App
