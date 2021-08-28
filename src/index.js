import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Quiz from "./Quiz";
import Hypotenuse from "./Hypotenuse";
import Area from "./Area";
import IsTriangle from "./IsTriangle";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Quiz} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/hypotenuse" component={Hypotenuse} />
      <Route path="/area" component={Area} />
      <Route path="/istriangle" component={IsTriangle} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
