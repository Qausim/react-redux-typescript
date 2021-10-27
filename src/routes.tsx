import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
