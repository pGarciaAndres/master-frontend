import React from "react";
import "./HelloWorld.scss";

export const HelloWorld: React.FC = () => {
  console.log(process.env.API_BASE);

  const user = "React";
  return <h1>{`Hello ${user}`}</h1>;
};
