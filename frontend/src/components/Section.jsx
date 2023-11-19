import Card from './Card'

function Section(props) {
  const card_listJSX = props.apiResult.map((data, key) =>
  (<Card
    product={data}
    key={key}
    addToCart={props.addToCart} />)
  );

  return <>
    <div className="container">
      <section className='py-5'><div className='container px-4 px-lg-5 mt-5'><div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-start">
        {card_listJSX}
      </div></div></section>
    </div>
  </>
}

export default Section;