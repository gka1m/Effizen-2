import React from "react";
import { Helmet } from "react-helmet-async";
import "./App.css";
import "./index.css";
import Tasklist from "./components/Tasklist";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="background-radial h-screen p-5">
        <Tasklist />
      </div>
    </>
  );
};

export default Home;
