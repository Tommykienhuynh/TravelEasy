import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./Home";
import Gallery from "./components/Gallery/Gallery";
import Japan from "./components/locations/location.jsx";
import NewYork from "./components/locations/Ny.jsx";
import losAngeles from "./components/locations/La.jsx";
import Vancouver from "./components/locations/Vancouver.jsx";
import About from "./components/about/about.jsx";
import ScrollToTop from "../src/scrollToTop";

function App() {
  return (
    <Router>
      {/*       <Navbar /> */}
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/japan" exact component={Japan} />
        <Route path="/about" exact component={About} />
        <Route path="/newYork" exact component={NewYork} />
        <Route path="/losAngeles" exact component={losAngeles} />
        <Route path="/vancouver" exact component={Vancouver} />
        <Route path="/about" exact component={About} />
        <Route path="/gallery" exact component={Gallery} />
      </Switch>
    </Router>
  );
}

export default App;
