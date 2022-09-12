import React from 'react'
import {
    Link
} from "react-router-dom";

function NavbarItem({name, href}) {
    return (
        <li className="nav-item">
          <Link className="nav-link" to={href}>{name}</Link>
        </li>
    )
}


export default function Navbar({navbarItems, auth, logout}) {
    let login_button = ''
    if (auth.is_login) {
    login_button = <button className="btn btn-outline-success my-2 my-sm-0" onClick={logout}>Hello, {auth.username} Logout</button>
    }
    else {
      login_button = <Link to='/login' className="btn btn-outline-success my-2 my-sm-0">Login</Link>
    }
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                  {navbarItems.map((item) => <NavbarItem name={item.name} href={item.href} />)}
              </ul>
                {/* {(auth.is_login) ? <Link to='/login' className="btn btn-outline-success my-2 my-sm-0">Login</Link> : <button className="btn btn-outline-success my-2 my-sm-0" onClick={logout}>Logout</button>} */}
                {login_button}
            </div>
          </nav>
    )
}