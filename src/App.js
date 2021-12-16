import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./views/Profile";
import HomePage from "./views/HomePage";
import Login from "./views/Login";
import "./style/main.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/user/:id" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
