// Import Lib
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./reducers/rootReducer"; // call all reducers that has been combine before

const persistConfig = {
  key: "root",
  storage,
};

// Store thunk middleware in enhancers
const enhancers = [applyMiddleware(thunk)];

if (process.env.NODE_ENV !== "production") {
  enhancers.push(applyMiddleware(createLogger())); // push redux-logger to enhancer
  window.devToolsExtension && enhancers.push(window.devToolsExtension()); // push redux-dev-tools to enhancer
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, {}, compose(...enhancers));
export const persistor = persistStore(store);
