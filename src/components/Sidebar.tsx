import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
  ClockIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";

const Sidebar: React.FC = () => {
  return (
    <Card
      className="h-full max-w-[20rem] p-4 background-radial"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="mb-2 p-4">
        <Typography
          variant="h5"
          color="blue-gray"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Menu
        </Typography>
      </div>
      <List
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <a href="/home">
          <ListItem
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <ListItemPrefix
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <ClipboardDocumentCheckIcon className="h-5 w-5" />
            </ListItemPrefix>
            Home
          </ListItem>
        </a>
        <a href="/timer">
          <ListItem
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <ListItemPrefix
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <ClockIcon className="h-5 w-5" />
            </ListItemPrefix>
            Pomodoro
          </ListItem>
        </a>
        <a href="/pending">
          <ListItem
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <ListItemPrefix
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
        </a>
        <a href="/pending">
          <ListItem
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <ListItemPrefix
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
        </a>

        <a href="/">
          <ListItem
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <ListItemPrefix
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </a>
      </List>
    </Card>
  );
};

export default Sidebar;
