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
            width="50"
            height="50"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M502.922 790.669c-152.755-1.391-276.788-125.42-278.177-278.177-0.661-72.618 29.297-142.754 79.451-194.66 52.395-54.221 124.439-82.84 198.726-83.516 71.011-0.646 71.074-110.824 0-110.177-212.832 1.937-386.417 175.518-388.354 388.353-1.937 212.854 178.438 386.443 388.354 388.354 71.073 0.644 71.011-109.531 0-110.177z"
                fill="#4C5AA3"
              ></path>
              <path
                d="M521.098 234.316c152.756 1.39 276.79 125.42 278.18 278.176 0.662 72.62-29.297 142.755-79.453 194.658-52.394 54.224-124.439 82.843-198.727 83.519-71.012 0.646-71.074 110.821 0 110.177 212.834-1.937 386.42-175.52 388.357-388.354 1.936-212.856-178.442-386.441-388.357-388.353-71.074-0.647-71.012 109.532 0 110.177z"
                fill="#D860B5"
              ></path>
              <path
                d="M410.657 510.563c-0.041-57.184 42.743-103.075 99.009-105.283 57.153-2.242 103.141 44.402 105.284 99.008 1.178 29.998 24.167 55.089 55.088 55.089 29.14 0 56.268-25.066 55.089-55.089-4.579-116.64-97.827-209.263-215.461-209.184-116.738 0.078-209.264 101.213-209.185 215.459 0.05 71.046 110.226 71.052 110.176 0z"
                fill="#FD9E22"
              ></path>
              <path
                d="M613.412 516.021c-1.083 56.13-46.052 101.095-102.18 102.176-56.155 1.084-101.125-47.673-102.175-102.176-1.369-70.956-111.547-71.089-110.177 0 2.258 117.153 95.202 210.093 212.352 212.353 117.147 2.259 210.164-98.607 212.356-212.353 1.371-71.09-108.807-70.956-110.176 0z"
                fill="#F35A50"
              ></path>
              <path
                d="M1014.707 512.492c0 22.698-19.031 41.099-42.513 41.099H792.696c-23.479 0-42.514-18.4-42.514-41.099 0-22.696 19.035-41.095 42.514-41.095h179.499c23.481 0 42.512 18.399 42.512 41.095zM273.579 514.308c0 22.696-19.033 41.095-42.517 41.095H51.563c-23.478 0-42.511-18.398-42.511-41.095 0-22.698 19.033-41.099 42.511-41.099h179.499c23.484 0 42.517 18.401 42.517 41.099zM510.838 272.762c-22.693 0-41.094-19.029-41.094-42.513V50.75c0-23.477 18.401-42.51 41.094-42.51 22.7 0 41.1 19.033 41.1 42.51v179.499c0 23.483-18.4 42.515-41.1 42.513zM510.838 1019.117c-22.693 0-41.094-19.031-41.094-42.513v-179.5c0-23.477 18.401-42.513 41.094-42.513 22.7 0 41.1 19.036 41.1 42.513v179.501c0 23.481-18.4 42.512-41.1 42.512z"
                fill="#F9D73B"
              ></path>
            </g>
          </svg>
          Effizen
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
