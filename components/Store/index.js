import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import { persistStore } from "redux-persist"
import rootReducer from "./reducers"
import promiseMiddleware from "redux-promise-middleware"

const isClient = typeof window !== "undefined"

const middleware = [thunk, promiseMiddleware]

if (process.env.ENV !== "production") {
  middleware.push(logger)
}

export const initialState = {
  order: { items: [], address: {} },
  authentication: {
    pending: false,
    failed: false,
    url: null,
  },
  stripe: false,
  user: { isLoggedIn: false },
  mobile: false,
  delivery: 0,
}

export default (serverSideInitialState) => {
  if (!serverSideInitialState) {
    serverSideInitialState = initialState
  }
  let store = null

  if (isClient) {
    const { persistReducer } = require("redux-persist")
    const storage = require("redux-persist/lib/storage").default
    const persistConfig = {
      key: "root",
      storage,
    }
    store = createStore(
      persistReducer(persistConfig, rootReducer),
      initialState,
      applyMiddleware(...middleware),
    )
    store.__PERSISTOR = persistStore(store)
  } else {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middleware),
    )
  }
  return store
}
