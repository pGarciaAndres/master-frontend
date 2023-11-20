import React from "react";
import { createRoot } from "react-dom/client";
import { HelloWorld } from "./components/HelloWorld";
import { Logo } from "./components/Logo";
import classes from "./index.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <div className={classes["container"]}>
    <Logo />
    <HelloWorld />
  </div>
);
