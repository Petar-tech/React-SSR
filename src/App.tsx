import React from "react";
import {
  StaticRouter,
  Switch,
  Route,
  StaticRouterProps,
} from "react-router-dom";

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

function App(props: StaticRouterProps) {
  return (
    <StaticRouter {...props}>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={About} path="/about" />
      </Switch>
    </StaticRouter>
  );
}

export default App;
