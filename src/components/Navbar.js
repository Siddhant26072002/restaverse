import React from 'react';
import {Link,useLocation} from "react-router-dom";

export default function Navbar() {
  let location = useLocation();

  return (
    <div className='nav'>
        <Link to="/" className='restaverse'>restaverse</Link>
        <div className='mid-nav'>
            <Link className={`link ${location.pathname==="/features"?"active":""}`} to="/features">Services</Link>
            <Link className={` link ${location.pathname==="/careers"?"active":""}`} to="/careers">Careers</Link>
            <span>About us</span>
        </div>
        <div className='login-button'>
            Login
        </div>

    </div>
  )
}

