import React from "react";
import "./Sidenav.scss";
export default function Sidenav() {
  return (
    <aside className="sidenav">
      <div className="logo__text">
        <span>MaxScale Admin</span>
      </div>
      <ul className="sidenav__list">
        <li className="sidenav__list-item"> Item One</li>
        <li className="sidenav__list-item"> Item Two</li>
        <li className="sidenav__list-item"> Item Three</li>
        <li className="sidenav__list-item"> Item Four</li>
        <li className="sidenav__list-item"> Item Five</li>
      </ul>
    </aside>
  );
}
