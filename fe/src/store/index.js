import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import { createBrowserHistory } from "history";
import { usersReducer } from "../reducers/usersReducer";
import { initialState } from "../reducers/usersReducer";

export const history = createBrowserHistory();
const enhancers = [];
const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, usersReducer);

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default function configure() {
  const store = createStore(persistedReducer, initialState, composedEnhancers);
  return { store, persistor: persistStore(store) };
}
