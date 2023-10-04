import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Calculator from "./features/Calculator/Calculator.Layout.jsx";
import Movies from "./features/Movies/Movies.Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Calculator />
    <Movies />
  </Provider>
);
