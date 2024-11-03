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
      </div>
    </>
  );
};

export default Landing;
