import { all, fork } from "redux-saga/effects";

import watchGetMoviesRequest from "../features/Movies/Movies.Saga";
import watchAddNumRequest from "../features/Calculator/Calculator.Saga";

export default function* rootSaga() {
  yield all([fork(watchGetMoviesRequest), fork(watchAddNumRequest)]);
}