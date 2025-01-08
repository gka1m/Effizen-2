import React from "react";
import { Helmet } from "react-helmet-async";
import Sidebar from "../components/Sidebar";
import Timer from "../components/Timer";
import "../App.css";
import "../index.css";

const Timepage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Timer</title>
      </Helmet>
      <div className="flex h-screen w-screen">
        <div className="w-64 background-radial">
          <Sidebar />
        </div>
        <div className="flex-1 background-radial">
          <Timer />
        </div>
      </div>
    </>
  );
};

export default Timepage;
