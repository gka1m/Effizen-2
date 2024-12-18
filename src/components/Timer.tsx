import React, { useState, useEffect } from "react";
import "../App.css";
import "../index.css";
import {
  PlayIcon,
  PauseIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";

interface Settings {
  workDuration: number;
  restDuration: number;
}

const Timer: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [workPhase, setWorkPhase] = useState(true);
  const [settings, setSettings] = useState<Settings>({
    workDuration: 25,
    restDuration: 5,
  });
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            togglePhase();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, workPhase, settings]);

  function togglePhase() {
    setWorkPhase((prev) => !prev);
    setTimeLeft((prev) =>
      workPhase ? settings.restDuration * 60 : settings.workDuration * 60
    );
    setIsRunning(false);
  }

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")} : ${secs
      .toString()
      .padStart(2, "0")}`;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Pomodoro Timer</h1>

      {/* Timer Display */}
      <div className="relative flex items-center justify-center w-60 h-60">
        <div className="absolute text-6xl font-bold text-red-600">
          {formatTime(timeLeft)}
        </div>
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="lightgray"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="red"
            strokeWidth="4"
            fill="none"
            strokeDasharray="282.74" // 2 * PI * radius (approx for r=45)
            strokeDashoffset={
              282.74 -
              (282.74 * timeLeft) /
                (workPhase
                  ? settings.workDuration * 60
                  : settings.restDuration * 60)
            }
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={() => setIsRunning((prev) => !prev)}
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          {isRunning ? (
            <PauseIcon className="w-6 h-6 text-white" />
          ) : (
            <PlayIcon className="w-6 h-6 text-white" />
          )}
        </button>
        <button
          onClick={() => setShowSettings(true)}
          className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
        >
          <Cog8ToothIcon className="w-6 h-6" />
        </button>
        <button
          onClick={togglePhase}
          className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
        >
          {workPhase ? "Skip to Rest" : "Skip to Work"}
        </button>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="w-96 bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">
                Work Duration (minutes)
              </label>
              <input
                type="number"
                min="1"
                value={settings.workDuration}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    workDuration: parseInt(e.target.value) || 1,
                  }))
                }
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">
                Rest Duration (minutes)
              </label>
              <input
                type="number"
                min="1"
                value={settings.restDuration}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    restDuration: parseInt(e.target.value) || 1,
                  }))
                }
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setTimeLeft(settings.workDuration * 60);
                  setWorkPhase(true);
                  setIsRunning(false);
                  setShowSettings(false);
                }}
                className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
