import React from "react";
import "./Main.scss";
import Threads from "./Threads";
import ServerDetail from "./ServerDetail";
export default function Main({ match }) {
  return (
    <main className="main">
      <br />
      <div className="main-header">
        <div className="main-header__heading">Hello User</div>
        <div className="main-header__updates">Recent Items</div>
      </div>
      <div className="server__threads__links"></div>
    </main>
  );
}
