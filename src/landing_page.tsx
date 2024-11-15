import React from "react";
import { Helmet } from "react-helmet-async";
import "./App.css";
import "./index.css";
import Navigator from "./components/Navigation";

const Landing: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Effizen | Welcome</title>
      </Helmet>
      <div className="background-radial h-screen">
        <Navigator />
        <br />
        <br />
        <div className="container p-24">
          <p className="text-6xl text-blue-500 text-center font-sans italic antialiased">
            The ultimate tool in productivity
          </p>
          <br />
          <p className="text-lg text-red-300">
            Check out the{" "}
            <a href="/features" className="underline">
              features
            </a>
          </p>
          <br />
          <p>
            or{" "}
            <a href="/login" className="underline">
              try it for yourself
            </a>
          </p>
          <a href="/home" className="underline">
            test
          </a>
        </div>
      </div>
    </>
  );
};

export default Landing;
