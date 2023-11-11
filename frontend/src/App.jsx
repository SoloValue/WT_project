import { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  const house_list = ["Villa", "Appartamento"]
  const house_listJSX = house_list.map((name_house, key) =>
    (<Card name={name_house} key={key} increment={(name) => setCount((s) => {
      if (!s[name]) {
        //spred operator
        return {...s, [name]:1};
      } else {
        return {...s, [name]: s[name]+1};
      }
    })} />)
  );

  const [count, setCount] = useState({}); 

  return (
    <>
      < Navbar />
      <h1>{JSON.stringify(count)}</h1>
      {house_listJSX}
    </>
  )
}

export default App
