import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidenav.scss";
export default function Sidenav() {
  return (
    <aside className="sidenav">
      <div className="logo__text">
        <span>MaxScale Admin</span>
      </div>
      <ul className="sidenav__list">
        <li className="sidenav__list-item">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="sidenav__list-item">
          <NavLink to="/servers" activeClassName="active">
            Servers
          </NavLink>
        </li>
        <li className="sidenav__list-item">
          <NavLink to="/threads" activeClassName="active">
            Threads
          </NavLink>
        </li>
        <li className="sidenav__list-item">
          <NavLink to="/settings" activeClassName="active">
            Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
