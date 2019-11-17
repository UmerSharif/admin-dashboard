import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import ServerDetail from "./pages/ServerDetail";
import Threads from "./pages/Threads";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Header />
        <Sidenav />
        <Route path="/home" component={Main}></Route>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
