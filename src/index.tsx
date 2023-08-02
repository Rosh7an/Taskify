import React from "react";
import ReactDOM from "react-dom/client";
import SignIn from "./signIn";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>
);
