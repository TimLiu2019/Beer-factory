import React, { Fragment } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Dashboard from "./components/Dashboard";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <div className="App">
        <Dashboard />
      </div>
    </Fragment>
  );
}

export default App;
