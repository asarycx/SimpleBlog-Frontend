import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./app/store";
import App from "./app/routes";
import * as serviceWorker from "./serviceWorker";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./app/store/redux.config";

import "./styles/master.scss";
import Loading from "./app/components/loading";

ReactDOM.render(
  <Provider store={configureStore()}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
