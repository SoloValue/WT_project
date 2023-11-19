import { useEffect, useState } from 'react'
import axios from "axios"

import Section from '../components/Section'

function Home(props) {
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

  return <>
    <div className='container'>
      <div>Cart: {JSON.stringify(props.cart)}</div>
    </div>
    <Section
      products_list={products_list}
      addToCart={(id) => props.setCart((s) => {
        if (!s[id]) {
          //spred operator
          return { ...s, [id]: 1 };
        } else {
          return { ...s, [id]: s[id] + 1 };
        }
      })} />
  </>
}

export default Home