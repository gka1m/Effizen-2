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
        <div className="w-64 bg-gray-100 shadow-md">
          <Sidebar />
        </div>
        <div className="flex-1 home-bg overflow-y-auto">
          <Timer />
        </div>
      </div>
    </>
  );
};

export default Timepage;
