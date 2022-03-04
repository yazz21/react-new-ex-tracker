import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <ul className="nav nav-tabs">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">ExcerTracker</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/">Exercise</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/create">Create Exercise Log</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/user">Create User</Link>
  </li>
</ul>
        </div>
    )
}
export default Nav;