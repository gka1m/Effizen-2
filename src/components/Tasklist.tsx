import React, { ChangeEvent, useState } from "react";
import {
  Input,
  Card,
  Typography,
  CardBody,
  IconButton,
} from "@material-tailwind/react";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
          <IconButton
            className="rounded"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onClick={addTask}
          >
            <i className="fab fa-plus text-lg" />
          </IconButton>
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
                <i className="fas fa-trash text-red-500" />
              </IconButton>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default Tasklist;
