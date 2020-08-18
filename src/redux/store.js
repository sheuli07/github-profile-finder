import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "../redux/rootReducer";

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

// const persistConfig = {
//     key: "persisted",
//     storage,
//     whitelist: ["user"],
// };

// const persistedReducer = persistedReducer(persistConfig, rootReducer);

export const store = createStore(rootReducer, enhancer);

// export const persistedStore = persistStore(store);
