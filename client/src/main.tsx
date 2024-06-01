// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import axios from "axios";
import axiosConfigForRefreshingTheToken from "../configs/axiosConfigForRefreshingToken.ts";
import { UserContextProvider } from "./authContext.tsx";

axiosConfigForRefreshingTheToken();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
