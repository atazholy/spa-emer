import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header";
import Login from "./components/login";
import Register from "./components/register";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="container-fluid position-relative">
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Redirect to="/login" />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
