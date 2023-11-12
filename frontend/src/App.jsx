import { useEffect, useState } from 'react'
import axios from "axios";

import Card from './components/Card'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

axios.defaults.baseURL = 'http://localhost:8000'; //address of Django API

function App() {
  // GET request to API
  const [apiResult, setApiResult] = useState([]);
  useEffect(() => {
    axios
      .get('/api/products/')
      .then((response) => {
        setApiResult(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  const [cart, setCart] = useState({});

  const card_listJSX = apiResult.map((data, key) =>
  (<Card
    product={data}
    key={key}
    increment={(id) => setCart((s) => {
      if (!s[id]) {
        //spred operator
        return { ...s, [data.id]: 1 };
      } else {
        return { ...s, [data.id]: s[data.id] + 1 };
      }
    })} />)
  );

  return (
    <>
      < Navbar />
      <div className="container">
        <div>Cart: {JSON.stringify(cart)}</div>
        <section className='py-5'><div className='container px-4 px-lg-5 mt-5'><div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-start">
          {card_listJSX}
        </div></div></section>
      </div>
      <Footer />
    </>
  )
}

export default App;
