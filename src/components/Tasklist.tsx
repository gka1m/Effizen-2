import React, { ChangeEvent, useState } from "react";
import {
  Input,
  Card,
  Typography,
  CardHeader,
  CardBody,
  IconButton,
} from "@material-tailwind/react";
import "@fortawesome/fontawesome-free/css/all.min.css";

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

  return (
    <Card
      className="w-full max-w-md mx-auto shadow-lg rounded-lg"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardHeader
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        color="cyan"
        className="p-4"
      >
        <Typography
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          variant="h5"
          color="black"
        >
          Outstanding Tasks
        </Typography>
      </CardHeader>
      <CardBody
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
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
        {/* <ul className="space-y-2">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center"
          ))}
        </ul> */}
      </CardBody>
    </Card>
  );
};

export default Tasklist;
