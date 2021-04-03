import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./Home";
import Gallery from "./components/Gallery/Gallery";
import Locations from "./components/locations/location.jsx";
import About from "./components/about/about.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/location" exact component={Locations} />
        <Route path="/about" exact component={About} />
        <Route path="/gallery" exact component={Gallery} />
      </Switch>
    </Router>
  );
}

export default App;
