import React, {StrictMode} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {MoralisProvider} from "react-moralis";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import Gamify from "components/Gamify";

/** Get your free Moralis Account https://moralis.io/ */

const APP_ID = "gYdQU1yhfngTet7rvc01bGr4R3dU1QoICiM0gEUS";
const SERVER_URL = "https://0fqztrvnh3x8.usemoralis.com:2053/server";

const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  //Validate
  if (!APP_ID || !SERVER_URL)
    throw new Error(
      "Missing Moralis Application ID or Server URL. Make sure to set your .env file."
    );
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <App isServerInfo />
      </MoralisProvider>
    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Gamify />
      </div>
    );
  }
};

ReactDOM.render(
  <StrictMode>
    <Application />,
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
