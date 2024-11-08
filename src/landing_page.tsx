import React from "react";
import { Helmet } from "react-helmet-async";
import "./App.css";
import "./index.css";
import Navigator from "./components/Navigation";

const Landing: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Effizen | Home</title>
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
            With task tracking, alarms and more
          </p>
        </div>
      </div>
    </>
  );
};

export default Landing;
