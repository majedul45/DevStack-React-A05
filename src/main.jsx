// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// import "./index.css";
// import "./App.css";

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode><App /></React.StrictMode>
// );


import React from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer position="bottom-right" autoClose={2200} hideProgressBar newestOnTop closeOnClick pauseOnHover theme="light" />
  </React.StrictMode>
);
