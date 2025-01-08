import React from "react";
import { Helmet } from "react-helmet-async";
import Sidebar from "../components/Sidebar";
import "../App.css";
import "../index.css";
import Tasklist from "../components/Tasklist";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* Parent Flex Container */}
      <div className="flex h-screen w-screen background-radial">
        {/* Sidebar */}
        <div className="w-64 shadow-md">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 background-radial overflow-y-auto">
          {/* Welcome Back Section */}
          <section className="mb-8 p-3">
            <h1 className="text-3xl font-bold text-gray-800 text-left">
              Welcome back!
            </h1>
            <p className="text-gray-600 text-left">
              Here's your productivity outlook for today:
            </p>
          </section>

          {/* Main Content Grid */}
          <div className="flex justify-center p-5">
            {/* Task List */}
            <div className="bg-white p-6 rounded-lg shadow-md card">
              <Tasklist />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
