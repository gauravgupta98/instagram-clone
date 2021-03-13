import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as ROUTES from "./constants/routes";
const NotFound = lazy(() => import("./pages/notfound"));
const Signup = lazy(() => import("./pages/signup"));
const Login = lazy(() => import("./pages/login"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGNUP} component={Signup} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}
