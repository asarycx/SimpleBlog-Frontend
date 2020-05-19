import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import "./index.css";
import App from "./route";
import * as serviceWorker from "./serviceWorker";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux.config";
import Loading from "./pages/shared/loading";

ReactDOM.render(
  <Provider store={configureStore()}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
