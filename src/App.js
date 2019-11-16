import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import Main from "./pages/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="grid-container">
      <Header />
      <Sidenav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
