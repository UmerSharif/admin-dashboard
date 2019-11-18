import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidenav.scss";

import {
  FaHome,
  FaServer,
  FaChartArea,
  FaCog,
  FaInfoCircle
} from "react-icons/fa";

export default function Sidenav() {
  return (
    <aside className="sidenav">
      <div className="logo__text">
        <span>MaxScale Admin</span>
      </div>
      <ul className="sidenav__list">
        <li className="sidenav__list-item">
          <NavLink exact to="/" activeClassName="active">
            <FaHome className="menu__icons" /> <span>Home</span>
          </NavLink>
        </li>
        <li className="sidenav__list-item">
          <NavLink to="/servers" activeClassName="active">
            <FaServer className="menu__icons" /> <span>Servers</span>
          </NavLink>
        </li>
        <li className="sidenav__list-item">
          <NavLink to="/threads" activeClassName="active">
            <FaChartArea className="menu__icons" /> <span>Threads</span>
          </NavLink>
        </li>
        <li className="sidenav__list-item">
          <NavLink to="/settings" activeClassName="active">
            <FaCog className="menu__icons" /> <span>Settings </span>
          </NavLink>
        </li>
      </ul>
      <div className="help__center ">
        <a target="_blank" href="https://mariadb.com/kb/en/maxscale/">
          <FaInfoCircle className="menu__icons" /> <span>Help Center</span>
        </a>
      </div>
    </aside>
  );
}
