import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const Navigator: React.FC = () => {
  const [openNav, setOpenNav] = useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue"
        className="flex items-center gap-x-2 p-1 font-medium"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M15 1H1V3H15V1Z" fill="#000000"></path>{" "}
            <path d="M15 5H1V7H15V5Z" fill="#000000"></path>{" "}
            <path d="M7 9H1V11H7V9Z" fill="#000000"></path>{" "}
            <path d="M1 13H7V15H1V13Z" fill="#000000"></path>{" "}
            <path
              d="M11 9V11H9V13H11V15H13V13H15V11H13V9H11Z"
              fill="#000000"
            ></path>{" "}
          </g>
        </svg>
        <a href="#" className="flex items-center">
          Features
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      className="mx-auto max-w-screen-2xl px-4 py-2 lg:px-8 lg:py-4"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="container mx-auto flex items-center justify-between text-light-blue-600">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <svg
            fill="#002aff"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="50"
            height="50"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M363.174,72.046C331.709,26.856,280.491,0,225.298,0C133.072,0,57.971,74.717,57.359,166.801L14.691,311.872l42.664,0.003 v50.78c0,33.794,27.494,61.289,61.289,61.289h90.808V512h183.792V383.918h104.066V72.046H363.174z M377.56,496.317H225.134 v-88.056H118.643c-25.147,0-45.606-20.459-45.606-45.606v-66.463l-37.387-0.001l37.387-127.118v-1.129 c0-83.957,68.304-152.261,152.262-152.261c46.275,0,89.47,20.826,118.272,56.363h-86.089v311.872H377.56V496.317z M481.626,368.235H273.165V87.729h208.461V368.235z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <polygon points="359.843,102.36 321.36,140.845 302.89,122.374 291.799,133.463 321.36,163.024 370.934,113.451 "></polygon>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <rect
                    x="378.585"
                    y="128.61"
                    width="79.46"
                    height="15.683"
                  ></rect>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <rect
                    x="378.585"
                    y="153.703"
                    width="47.049"
                    height="15.683"
                  ></rect>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <polygon points="359.843,182.412 321.36,220.895 302.89,202.424 291.799,213.515 321.36,243.074 370.934,193.502 "></polygon>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <rect
                    x="378.585"
                    y="210.161"
                    width="79.46"
                    height="15.683"
                  ></rect>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <rect
                    x="378.585"
                    y="233.163"
                    width="47.049"
                    height="15.683"
                  ></rect>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <polygon points="359.843,262.462 321.36,300.947 302.89,282.476 291.799,293.566 321.36,323.126 370.934,273.553 "></polygon>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <rect
                    x="378.585"
                    y="288.575"
                    width="79.46"
                    height="15.683"
                  ></rect>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <rect
                    x="378.585"
                    y="312.623"
                    width="47.049"
                    height="15.683"
                  ></rect>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <Button
            variant="text"
            size="sm"
            className="hidden lg:inline-block"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <span>Log In</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <span>Sign in</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button
              fullWidth
              variant="text"
              size="sm"
              className=""
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <span>Log In</span>
            </Button>
            <Button
              fullWidth
              variant="gradient"
              size="sm"
              className=""
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default Navigator;
