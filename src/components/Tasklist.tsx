import React, { ChangeEvent, useState } from "react";
import {
  Input,
  Card,
  Typography,
  CardBody,
  IconButton,
} from "@material-tailwind/react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TrashIcon } from "@heroicons/react/24/outline";

interface Task {
  id: number;
  text: string;
  isEditing: boolean;
  originalText?: string;
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
        task.id === id ? { ...task, text: newContent } : task
      )
    );
  }

  function handleEdit(e: React.KeyboardEvent<HTMLInputElement>, id: number) {
    if (e.key === "Enter") {
      toggleEdit(id);
    } else if (e.key === "Escape") {
      setTasks(
        tasks.map((task) =>
          task.id === id
            ? {
                ...task,
                text: task.originalText || task.text,
                isEditing: false,
                originalText: undefined,
              }
            : task
        )
      );
    }
  }

  function toggleEdit(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isEditing: !task.isEditing,
              originalText: task.isEditing ? undefined : task.text,
            }
          : task
      )
    );
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return (
    <Card
      className="w-full max-w-md mx-auto shadow-lg rounded-lg"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardBody
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Outstanding Tasks
        </Typography>
        <div className="flex gap-2 mb-4">
          <Input
            type="text"
            placeholder="Task"
            value={input}
            onChange={handleChange}
            onKeyDown={handleAdd}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
          <button
            title="Add New"
            className="group cursor-pointer outline-none hover:rotate-90 duration-300"
            onClick={addTask}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              className="stroke-blue-400 fill-none group-hover:fill-blue-800 group-active:stroke-blue-200 group-active:fill-blue-600 group-active:duration-0 duration-300"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke-width="1.5"
              ></path>
              <path d="M8 12H16" stroke-width="1.5"></path>
              <path d="M12 16V8" stroke-width="1.5"></path>
            </svg>
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-2 bg-gray-100 rounded-lg"
            >
              {task.isEditing ? (
                <Input
                  type="text"
                  value={task.text}
                  autoFocus
                  onChange={(e) => editTask(task.id, e.target.value)}
                  onKeyDown={(e) => handleEdit(e, task.id)}
                  onBlur={() => toggleEdit(task.id)}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
              ) : (
                <span
                  className="flex-1 cursor-pointer"
                  onClick={() => toggleEdit(task.id)}
                >
                  {task.text}
                </span>
              )}
              <button
                onClick={() => deleteTask(task.id)}
                className="group relative flex h-10 w-10 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-red-800 bg-red-400 hover:bg-red-600"
              >
                <svg
                  viewBox="0 0 1.625 1.625"
                  className="absolute -top-7 fill-white delay-100 group-hover:top-4 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
                  height="15"
                  width="15"
                >
                  <path d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195"></path>
                  <path d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033"></path>
                  <path d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016"></path>
                </svg>
                <svg
                  width="16"
                  fill="none"
                  viewBox="0 0 39 7"
                  className="origin-right duration-500 group-hover:rotate-90"
                >
                  <line
                    stroke-width="4"
                    stroke="white"
                    y2="5"
                    x2="39"
                    y1="5"
                  ></line>
                  <line
                    stroke-width="3"
                    stroke="white"
                    y2="1.5"
                    x2="26.0357"
                    y1="1.5"
                    x1="12"
                  ></line>
                </svg>
                <svg width="16" fill="none" viewBox="0 0 33 39">
                  <mask fill="white" id="path-1-inside-1_8_19">
                    <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                  </mask>
                  <path
                    mask="url(#path-1-inside-1_8_19)"
                    fill="white"
                    d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                  ></path>
                  <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
                  <path stroke-width="4" stroke="white" d="M21 6V29"></path>
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default Tasklist;
