import config from "../config";
import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import "./Component.scss";

export const Component: React.FC = () => {
  return (
    <div className="component">
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <h1>{config.LOCAL_ENV_TECH}</h1>
      <img src={reactLogo} className="logo react" alt="React logo" />
    </div>
  );
};
