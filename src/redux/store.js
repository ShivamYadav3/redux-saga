import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
// import watchAddNumRequest from "../features/Calculator/Calculator.Saga";
import calculatorSlice from "../features/Calculator/Calculator.Slice";
import moviesSlice from "../features/Movies/Movies.Slice";
import rootSaga from "./root-saga";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
    movies: moviesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware,logger),
});

sagaMiddleware.run(rootSaga);