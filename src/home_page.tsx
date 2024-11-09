import React from "react";
import { Helmet } from "react-helmet-async";
import "./App.css";
import "./index.css";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="background-radial h-screen"></div>
    </>
  );
};

export default Home;
