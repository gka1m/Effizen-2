import React, { ChangeEvent, useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import "./App.css";
import "./index.css";

interface Task {
  id: number;
  text: string;
  isEditing: boolean;
}

const Tasklist: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState<string>("");

  function addTask() {
    if (input.trim()) {
      const newTask: Task = {
        id: Date.now(),
        text: input,
        isEditing: false,
      };
      setTasks([...tasks, newTask]);
      setInput("");
    }
  }

  function handleAdd(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      addTask();
    }
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function editTask(id: number, newContent: string) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, content: newContent } : task
      )
    );
  }

  function handleEdit(e: React.KeyboardEvent<HTMLInputElement>, id: number) {
    if (e.key === "Enter") {
      toggleEdit(id);
    }
  }

  function toggleEdit(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return <div>Tasklist</div>;
};

export default Tasklist;
