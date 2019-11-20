import React from "react";
import "./Main.scss";

import { FaServer, FaChartArea } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function Main() {
  return (
    <main className="main">
      <br />
      <div className="main-header">
        <div className="main-header__heading">
          Hello User, Welcome to MaxScale Admin Panel
        </div>
        <div className="main-header__updates">Recent Items</div>
      </div>
      <div className="server__thread__links__outer">
        <div className="server__threads__links">
          <NavLink to="/servers" activeClassName="active">
            <span>Servers</span>
            <FaServer className="server__threads__menu__icons" />
          </NavLink>
        </div>
        <div className="server__threads__links">
          <NavLink to="/threads" activeClassName="active">
            <span>Threads</span>
            <FaChartArea className="server__threads__menu__icons" />
          </NavLink>
        </div>
      </div>
    </main>
  );
}
