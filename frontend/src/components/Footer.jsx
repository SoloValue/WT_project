import { useState } from "react";
import axios from "axios";

function Footer(props) {
  function fillDb() {

    var users_to_add = [1, 2, 3, 4, 5, 6];
    var users_to_add = users_to_add.map((i) => (
      {
        id: i + 1,
        username: "testuser" + i,
        email: "testuser" + i + "@shop.aa",
        password: "123"
      }
    ));

    axios
      .delete('/api/users/delete_all/')
      .then(() => {
        console.log("Users deleated");
      })
      .catch((err) => {
        console.log(err);
      });

    /*axios
      .delete('/api/products/delete_all/')
      .then(() => {
        console.log('Products deleted')
      })
      .catch((err) => {
        console.log(err);
      });*/

    axios
      .post('api/users/', users_to_add)
      .catch((err) => {
        console.log(err);
      });
  }

  return <footer className="py-5 bg-dark">
    <div className="d-flex mb-2 justify-content-between">
      <div className="p-2"></div>
      <div className='p-2'><p className="m-0 text-center text-white">Copyright &copy; 2023</p></div>
      <div className='p-2 me-3'>
        <button
          type="button"
          className="btn btn-outline-light aligned-end"
          onClick={fillDb}>Fill DB</button>
      </div>
    </div>
  </footer>
}

export default Footer;