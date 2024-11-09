import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const Landing = lazy(() => import("./landing_page"));
const Home = lazy(() => import("./home_page"));

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Suspense>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default Routing;
