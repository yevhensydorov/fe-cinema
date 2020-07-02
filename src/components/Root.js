import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "../app/store";
import { Provider } from "react-redux";
import App from "./App";
import MovieDetails from "./MovieDetails";

const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/movies/:imdbID" component={MovieDetails} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
