import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Layout from "../components/layout";
import NotFound from "../components/errors/404";

import routes from "./routes";

export default function route() {
  return (
    <Router history={createBrowserHistory()}>
      <Layout>
        <Switch>
          {routes.map((item, iteration) => {
            return <Route key={iteration} {...item} />;
          })}
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}
