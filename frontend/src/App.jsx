import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from "axios";

// pages
import Home from './pages/Home'
import Login from './pages/Login'

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

axios.defaults.baseURL = 'http://localhost:8000'; //address of Django API

function App() {

  const [cart, setCart] = useState({});

  return <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home
        cart={cart}
        setCart={setCart}
      />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    <Footer />
  </>
}

export default App;