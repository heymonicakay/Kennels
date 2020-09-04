import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
          <div className="navbar__title">
            NSS Kennels
          </div>
            <Link className="navbar__link" to="/">Locations</Link>
            <Link className="navbar__link" to="/animals">Animals</Link>
            <Link className="navbar__link" to="/customers">Customers</Link>
            <Link className="navbar__link" to="/employees">Employees</Link>
        </ul>
    )
}