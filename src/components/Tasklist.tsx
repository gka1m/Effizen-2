import React, { useState } from "react";
import "./App.css";
import "./index.css";

interface Tasklist {
  id: number;
  text: string;
}

const Tasklist: React.FC = () => {
  const [tasks, setTasks] = useState<Tasklist[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [editTask, setEditingTask] = useState<string>("");
  const [editedTask, setEditedTask] = useState<string>("");

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: newTask },
      ]);
      setNewTask("");
    }
  }

  function handleAddTask(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      addTask();
    }
  }

  return <div>Tasklist</div>;
};

export default Tasklist;
