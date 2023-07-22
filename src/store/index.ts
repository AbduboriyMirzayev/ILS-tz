import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import { sagas } from "./saga";

const sagaMiddleware = createSagaMiddleware();
const { run: runSaga } = sagaMiddleware;

const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), ...middlewares],
});

runSaga(sagas);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
