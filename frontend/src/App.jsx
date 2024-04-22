import "../src/apptest.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/auth/Login"
import Register from './components/auth/Register';
import RegisterProvider from './components/auth/RegisterProvider'
import LandingPage from "./components/Pages/LandingPage";
//import Welcome from './components/auth/Welcome'

  
  function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registerprovider" element={<RegisterProvider />} />
        {/* <Route path="/" element={<Welcome />} /> */}
        
      </Routes>
    </BrowserRouter>  
    );
  }
  


export default App
