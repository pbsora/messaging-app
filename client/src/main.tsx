import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Config/Router/Router";

axios.defaults.baseURL = "http://localhost:3000/api/";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
);
