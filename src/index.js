import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "emotion";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { colors } from "./util/globalStyles";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

injectGlobal`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${colors.font};
    font-size: 16px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
