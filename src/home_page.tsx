import React from "react";
import { Helmet } from "react-helmet-async";
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
      <div className="home-bg h-screen w-screen">
        {/* Welcome Back Section */}
        <section className="mb-8 py-3">
          <h1 className="text-3xl font-bold text-gray-800 text-left">
            Welcome back, {userName}!
          </h1>
          <p className="text-gray-600 text-left">
            Here's your productivity outlook for today:
          </p>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Reminders */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Reminders</h2>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Team meeting at 10 AM</span>
                <span className="text-gray-500">Today</span>
              </li>
              <li className="flex justify-between">
                <span>Project deadline</span>
                <span className="text-gray-500">Tomorrow</span>
              </li>
              <li className="flex justify-between">
                <span>Client call</span>
                <span className="text-gray-500">Friday</span>
              </li>
            </ul>
          </div>

          {/* Task List */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Tasklist />
          </div>

          {/* Feature Highlights */}
          <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-3">
            <h2 className="text-xl font-semibold mb-4">New Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Feature 1</h3>
                <p className="text-gray-600">Description of feature 1.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Feature 2</h3>
                <p className="text-gray-600">Description of feature 2.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Feature 3</h3>
                <p className="text-gray-600">Description of feature 3.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
