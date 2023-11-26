import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from "axios";

// pages
import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Profile from './pages/Profile'

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

axios.defaults.baseURL = 'http://localhost:8000'; //address of Django API

function App() {

  const [authUser, setAuthUser] = useState({
    username: "",
    email: "",
    token: ""
  });
  const [cart, setCart] = useState({});

  return <>
    <Navbar username={authUser.username} />
    <Routes>
      <Route path='/' element={<Home
        cart={cart}
        setCart={setCart}
      />} />
      <Route path='/login' element={<Login authUser={authUser} setAuthUser={setAuthUser} />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/profile' element={<Profile username={authUser.username} />} />
    </Routes>
    <Footer />
  </>
}

export default App