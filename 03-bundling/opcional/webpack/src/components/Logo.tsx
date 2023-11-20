import React from "react";
import reactImg from "../images/react.svg";
import classes from "./Logo.scss";

export const Logo: React.FC = () => {
  return <img className={classes["logo"]} src={reactImg} alt="React Logo" />;
};
