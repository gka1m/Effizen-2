import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleToggle = setOpenNav(!openNav);

  return (
    <Navbar
      className="mx-auto max-w-screen-x1 px-4 py-3"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Typography
          as="a"
          href="#"
          variant="h5"
          className="mr-4 cursor-pointer py-1.5 text-lg font-bold"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Effizen
        </Typography>

        {/* links */}
        <div className="hidden lg:flex gap-4">
          <Button
            variant="text"
            color="blue-gray"
            ref="#features"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Features
          </Button>
          <Button
            variant="text"
            color="blue-gray"
            ref="#signup"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Sign Up
          </Button>
          <Button
            variant="text"
            color="blue-gray"
            ref="#login"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Log In
          </Button>
        </div>
      </div>
    </Navbar>
  );
};

export default Navigation;
