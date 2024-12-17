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
          {/* <IconButton
            className="rounded"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onClick={addTask}
          >
            <PlusIcon className="h-5 w-5" />
          </IconButton> */}
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
              <IconButton
                onClick={() => deleteTask(task.id)}
                className="ml-2"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <TrashIcon className="h-5 w-5 text-red-500" />
              </IconButton>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default Tasklist;
