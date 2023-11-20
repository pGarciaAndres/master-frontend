import React from "react";
import * as classes from "./HelloWorld.module.scss";

export const HelloWorld: React.FC = () => {
  const user: string = "Parcel";
  return <h1 className={classes.headline}>{`Hello ${user}`}</h1>;
};
