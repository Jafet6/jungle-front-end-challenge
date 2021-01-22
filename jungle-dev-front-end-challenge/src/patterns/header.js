import React from 'react';
import { Link } from "react-router-dom";
import shape from '../images/homePage/shape.svg'


function Header() {
  return (
    <header>
      <nav>
        <div className="shape-div">
          <img src={shape} /> 
        </div>
        <div className="left-links">
          <Link to='/1'>Create your Nanny Share</Link>
          <Link to='/2'>Browse Shares</Link>
          <Link to='/3'>Our Story</Link>
        </div>
        <div className="right-links">
          <button>Become a Nanny Share Host</button>
          <Link to='/4'>Sign in</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header;
