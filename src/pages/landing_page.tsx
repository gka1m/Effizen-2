import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../App.css";
import "../index.css";

const Landing: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Effizen | Welcome</title>
      </Helmet>
      <div className="background-radial w-screen h-screen">
        <div className="container p-24 mx-auto w-full">
          <p className="text-6xl text-blue-500 text-center font-sans italic antialiased">
            Effizen: Task Organization Meets Pomodoro Focus
          </p>
          <br />
          <h1 className="text-4xl text-red-300">Features:</h1>
          <br />
          <ul className="text-2xl text-red-300">
            <li>1. Task Tracker</li>
            <li>2. Pomodoro Timer with Work-Rest cycles</li>
            <br />
            <li>with more features on the way...</li>
          </ul>
          <br />
          <p className="text-xl text-black text-center font-sans">
            A frontend project by:
            <br />
            Kai Ming
          </p>
          <br />
          <Link
            to="/home" // Set the redirect URL here
            className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

            <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
              <div className="relative z-10 flex items-center space-x-2">
                <span className="transition-all duration-500 group-hover:translate-x-1">
                  Try it out!
                </span>
                <svg
                  className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                  data-slot="icon"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
