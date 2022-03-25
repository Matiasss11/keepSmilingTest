import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./index";
import logger from "redux-logger";
import throttle from "lodash.throttle";

import { loadState, saveState } from "./localStorage";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const composeEnhancer =
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

  const enhancer = composeEnhancer(
    applyMiddleware(routerMiddleware(history), thunk, logger)
  );

  if (!preloadedState) {
    preloadedState = loadState();
  }

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    enhancer
  );

  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }, 1000)
  );

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./index", () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store;
}