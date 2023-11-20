import React from "react";
import parcelImg from "../images/parcel.png";
import classes from "./Logo.module.scss";

export const Logo: React.FC = () => {
  return <img className={classes.logo} src={parcelImg} alt="Parcel Logo" />;
};
