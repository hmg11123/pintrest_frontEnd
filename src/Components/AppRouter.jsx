import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Content from "../Router/layouts/Content";
import Header from "../Router/layouts/Header";

const AppRouter = () => {
 return (
  <Router>
   <Route path="/" component={Header}></Route>
   <Route path="/" component={Content}></Route>
  </Router>
 );
};

export default AppRouter;
