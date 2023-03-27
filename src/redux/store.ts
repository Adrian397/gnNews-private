import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { newsApi } from "./api/api";
import languageReducer from "./language";
import layoutReducer from "./layout";
import sideMenuReducer from "./sideMenu";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  layout: layoutReducer,
  language: languageReducer,
});

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persisted: persistedReducers,
    sideMenu: sideMenuReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
