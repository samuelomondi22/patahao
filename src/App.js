import React from "react";
import "./App.css";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import SingleRoom from "./components/SingleRoom";
import Error from "./components/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

//NOTES
//:slug helps us navigate to the required single room. Name isnt a problem it can be named however
//Switch helps the error not to be displayed on every page but specifically on the error page. A <Switch> always renders the first child <Route> that matches
