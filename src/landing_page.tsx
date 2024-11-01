import React from "react";
import { Helmet } from "react-helmet-async";
import "./index.css";
import "./App.css";

const Landing: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Effizen | Home</title>
      </Helmet>
      <div className="background-radial h-screen"></div>
    </>
  );
};

export default Landing;
