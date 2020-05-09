import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../routes/home";
import Products from "../routes/products";
import Contact from "../routes/contact";
import Nav from "./nav";

const App = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Products} path="/products" />
      <Route component={Contact} path="/contact" />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default App;
