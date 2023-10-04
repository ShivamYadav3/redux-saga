import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
// import watchAddNumRequest from "../features/Calculator/Calculator.Saga";
import calcuatorSlice from "../features/Calculator/Calculator.Slice";
import moviesSlice from "../features/Movies/Movies.Slice";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    calculator: calcuatorSlice,
    movies: moviesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);