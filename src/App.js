import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import Profile from "./views/Profile";
import HomePage from "./views/HomePage";
import Login from "./views/Login";
import "./style/main.css";
import history from "./utils/history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
