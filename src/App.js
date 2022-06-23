import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// components
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Register from './components/pages/Register'
import Calc from './components/pages/Calc'
import ColabRegister from "./components/pages/ColabRegister"
import Login from "./components/pages/Login"
import CalcPgto from "./components/pages/CalcPgto"
import CalcDecimo from "./components/pages/CalcDecimo"


import Container from "./components/layouts/Container"
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"


// display
function App() {
  return (
      <Router>
        <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/company" element={<Company />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/calc" element={<Calc />}/>
            <Route path="/colab" element={<ColabRegister />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/calcfolha" element={<CalcPgto />}/>
            <Route path="/calcdec" element={<CalcDecimo />}/>
          </Routes>
        </Container>
        <Footer />
      </Router>
    
    
  );
}

export default App;
