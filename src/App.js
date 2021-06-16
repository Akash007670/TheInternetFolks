import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Start from "./components/GetStarted/Start";
import Searchbar from "./components/MainContent/Searchbar";
import Content from "./components/AdvancedStatistic/Content";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Home />
        <Start />
      </Router>
      <Searchbar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
