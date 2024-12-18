import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";

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
    return `${minutes.toString().padStart(2, "0")}: ${secs
      .toString()
      .padStart(2, "0")}`;
  }
  return <div>Timer</div>;
};

export default Timer;
