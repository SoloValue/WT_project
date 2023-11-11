import { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  const [cart, setCart] = useState({});

  const api_result = [{ 'name': 'iPhone 15', 'price': 1290.00 }, { 'name': 'Dune', 'price': 6.99 }, { 'name': 'iPhone 15', 'price': 1290.00 }, { 'name': 'Dune', 'price': 6.99 }, { 'name': 'iPhone 15', 'price': 1290.00 }, { 'name': 'Dune', 'price': 6.99 }, { 'name': 'iPhone 15', 'price': 1290.00 }, { 'name': 'Dune', 'price': 6.99 }, { 'name': 'iPhone 15', 'price': 1290.00 }, { 'name': 'Dune', 'price': 6.99 }, { 'name': 'iPhone 15', 'price': 1290.00 }];
  const card_listJSX = api_result.map((json_data, key) =>
  (<Card name={json_data.name} price={json_data.price} key={key} increment={(name) => setCart((s) => {
    if (!s[name]) {
      //spred operator
      return { ...s, [json_data.name]: 1 };
    } else {
      return { ...s, [json_data.name]: s[json_data.name] + 1 };
    }
  })} />)
  );

  return (
    <>
      < Navbar />
      <div className="container">
        <h1>Cart: {JSON.stringify(cart)}</h1>
        <section className='py-5'>
          <div className='container px-4 px-lg-5 mt-5'>
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-start">
              {card_listJSX}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App;
