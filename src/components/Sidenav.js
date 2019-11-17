import React from "react";
import { Link } from "react-router-dom";
import "./Sidenav.scss";
export default function Sidenav() {
  return (
    <aside className="sidenav">
      <div className="logo__text">
        <span>MaxScale Admin</span>
      </div>
      <ul className="sidenav__list">
        <li className="sidenav__list-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="sidenav__list-item">
          {/* <Link to="/servers">Servers</Link> */}
        </li>
        <li className="sidenav__list-item"> Item Three</li>
        <li className="sidenav__list-item"> Item Four</li>
      </ul>
    </aside>
  );
}
