import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  BrowserRouter as Route,
  Router,
  Routes,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Suspense fallback={<div>loading...</div>}>
          <Routes></Routes>
        </Suspense>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default Routing;
