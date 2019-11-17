import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import ServerDetail from "./pages/ServerDetail";
import Threads from "./pages/Threads";
import Settings from "./components/Settings";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <section className="nav">
          <Sidenav />
        </section>
        <section className="contents">
          <Header />
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/servers" component={ServerDetail}></Route>
          <Route exact path="/threads" component={Threads}></Route>
          <Route exact path="/settings" component={Settings}></Route>
          <Footer />
        </section>
      </div>
    </Router>
  );
}

export default App;
