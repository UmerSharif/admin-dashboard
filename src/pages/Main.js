import React from "react";
import "./Main.scss";
import Threads from "./Threads";
import ServerDetail from "./ServerDetail";
export default function Main() {
  return (
    <main className="main">
      <div className="main-header">
        <div className="main-header__heading">Hello User</div>
        <div className="main-header__updates">Recent Items</div>
      </div>
      <div className="server__threads__links">
        <a href="">Server</a>
        <a href="">Threads</a>
      </div>
    </main>
  );
}
