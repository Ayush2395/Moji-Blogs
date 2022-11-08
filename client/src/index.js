import React from "react";
import ReactDOM from "react-dom/client";
import "./style/style.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { AppContextProvider } from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AppContextProvider>
        <Router>
          <App />
        </Router>
      </AppContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
