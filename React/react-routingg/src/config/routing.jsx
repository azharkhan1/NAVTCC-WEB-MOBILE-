import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from "../containers/home";
  import About from "../containers/about";
  import Tweets from "../containers/tweets";

  export default function AppRouter(){
      return(
          <Router>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/tweets" component={Tweets} />
          </Router>
      )
  }