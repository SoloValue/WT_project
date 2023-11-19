import { useState } from "react";
import axios from "axios";

function Footer(props) {
  function fillDb() {

    var users_to_add = [1, 2, 3, 4, 5, 6];
    var users_to_add = users_to_add.map((i) => (
      {
        username: "testuser" + i,
        email: "testuser" + i + "@shop.aa",
        password: "pass" + i
      }
    ));

    var products_to_add = [
      {
        name: "iPhon 12",
        description: "Top tier apple product",
        price: 1299.00,
        category: 2,
        user: "testuser2@shop.aa"
      },
      {
        name: "Galaxy S10",
        description: "Latest smartphone from samsung",
        price: 870.00,
        category: 2,
        user: "testuser2@shop.aa"
      },
      {
        name: "Oppo 8",
        description: "Cheap and efficient smartphone",
        price: 670.00,
        category: 2,
        user: "testuser2@shop.aa"
      },
      {
        name: "Dune",
        description: "Dune is a 1965 epic science fiction novel by American author Frank Herbert.",
        price: 7.99,
        category: 1,
        user: "testuser1@shop.aa"
      },
      {
        name: "1968",
        description: "Nineteen Eighty-Four is a dystopian novel and cautionary tale by English writer George Orwell.",
        price: 6.70,
        category: 1,
        user: "testuser1@shop.aa"
      },
      {
        name: "Dune Messiah",
        description: "Sequel of Dune",
        price: 7.50,
        category: 1,
        user: "testuser1@shop.aa"
      }
    ];

    /*axios
      .delete('/api/users/delete_all/')
      .then(() => {
        console.log("Users deleated");
      })
      .catch((err) => {
        console.log(err);
      });*/

    /*axios
      .delete('/api/products/delete_all/')
      .then(() => {
        console.log('Products deleted')
      })
      .catch((err) => {
        console.log(err);
      });*/

    const deleteUsers = async (a) => {
      await axios.delete('/api/users/delete_all/');
      console.log("Users deleted");
    }

    const postUsers = async (a) => {
      await axios.post('api/users/', users_to_add);
      console.log("Users posted");
    }

    const postProducts = async (a) => {
      await axios.post('api/products/', products_to_add);
      console.log("Products posted");
    }
    try {
      var firstResponse = deleteUsers();
      var secondResponse = postUsers(firstResponse);
      var thirdResponse = postProducts(secondResponse);

    } catch (err) {
      console.log(err)
    }
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