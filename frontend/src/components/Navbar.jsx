import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Navbar(props) {
  let isLoggedIn = (props.username !== '');

  return <nav className="navbar navbar-expand-lg bg-dark-subtle">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">E-Commerce</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {isLoggedIn ? <CustomLink to='/profile'>{props.username}</CustomLink> : <CustomLink to='/login'>Login</CustomLink>}

          <CustomLink to='/cart'>Cart</CustomLink>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return <>
    <li className='nav-item'>
      <Link
        to={to}
        className={isActive ? 'nav-link active' : 'nav-link'}
        {...props}>
        {children}
      </Link>
    </li>
  </>
}

export default Navbar