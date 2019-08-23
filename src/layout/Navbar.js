import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar-fixed">
      <Link to="/"><h3>Multi-Monitor Calculator</h3></Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className="navbar-spacer"></div>
    </>

  )
}

export default Navbar
