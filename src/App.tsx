import React, { useState } from "react";
import {
  StaticRouter,
  Switch,
  Route,
  StaticRouterProps,
} from "react-router-dom";

const Home = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};
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
