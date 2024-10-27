import React from "react";
import { Helmet } from "react-helmet-async";
import "./index.css";

const Landing: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Effizen | Home</title>
      </Helmet>
      <div className="bg-blue-700 h-screen">
        <p>Hi there</p>
      </div>
    </>
  );
};

export default Landing;
