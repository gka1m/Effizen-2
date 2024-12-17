import React from "react";
import { Helmet } from "react-helmet-async";
import Sidebar from "./components/Sidebar";
import "./App.css";
import "./index.css";
import Tasklist from "./components/Tasklist";

const Home = () => {
  const userName = "John Doe"; // Replace with dynamic data from backend

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* Parent Flex Container */}
      <div className="flex h-screen w-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-100 shadow-md">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 home-bg overflow-y-auto">
          {/* Welcome Back Section */}
          <section className="mb-8 p-3">
            <h1 className="text-3xl font-bold text-gray-800 text-left">
              Welcome back, {userName}!
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
