import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./utils/history";
import "./App.css";
import Home from "./pages/Home";
import ModPlayground from './pages/ModPlayground';


// Don't forget to include the CSS styles for antd!
import "antd/dist/antd.css";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/modplayground" exact component={ModPlayground} />
      </Switch>
    </Router>
  );
}

export default App;
