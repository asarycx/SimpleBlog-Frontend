import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import PublicLayout from "../pages/_layouts/public";
import SubscriberLayout from "../pages/_layouts/subscriber";

import routes from "./routes";

export default function route() {
  function RouteWrapper({ routeProps, layout: Layout }) {
    return (
      <Route
        path={routeProps.path}
        exact={routeProps.exact}
        render={(props) => (
          <Layout {...props}>
            <routeProps.component {...props} />
          </Layout>
        )}
      />
    );
  }

  return (
    <Router history={createBrowserHistory()}>
      {/* <Switch> */}
      {routes.map((item, iteration) => {
        return (
          <RouteWrapper
            key={iteration}
            layout={!item.auth ? PublicLayout : SubscriberLayout}
            routeProps={item}
          />
        );
      })}
      {/* <Route component={FourOFour} /> */}
      {/* </Switch> */}
    </Router>
  );
}
