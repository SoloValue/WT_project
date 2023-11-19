import { useEffect, useState } from 'react'
import axios from "axios";

import Section from './components/Section'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

axios.defaults.baseURL = 'http://localhost:8000'; //address of Django API

function App() {
  // GET request to API
  const [products_list, setProductList] = useState([]);
  useEffect(() => {
    axios
      .get('/api/products/')
      .then((response) => {
        setProductList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  const [cart, setCart] = useState({});

  return <>
    <Navbar />
    <div className='container'>
      <div>Cart: {JSON.stringify(cart)}</div>
    </div>
    <Section
      products_list={products_list}
      addToCart={(id) => setCart((s) => {
        if (!s[id]) {
          //spred operator
          return { ...s, [id]: 1 };
        } else {
          return { ...s, [id]: s[id] + 1 };
        }
      })} />
    <Footer />
  </>
}

export default App;