import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { PostProvider } from "./Context/postContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <PostProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </PostProvider>
  </React.StrictMode>,
  document.getElementById("root")  
);
