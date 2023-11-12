import { useState } from "react";
import axios from "axios";

function Footer(props) {

  function fillDb() {
    /*axios
      .post('/api/users/', {
        username: 'testuser0',
        email: 'testuser0@shop.aa',
        password: '123'
      })*/

    axios
      .delete('/api/users/4')
      .then(() => {
        alert("Post deleted!");
      })
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



