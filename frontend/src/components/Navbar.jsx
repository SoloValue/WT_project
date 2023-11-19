import { useState } from "react";

function Navbar(props) {
  return <nav className="navbar navbar-expand-lg bg-dark-subtle">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">E-Commerce</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/login">Log in</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Cart</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
}

export default Navbar;