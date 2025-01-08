import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const Landing = lazy(() => import("./pages/landing_page"));
const Home = lazy(() => import("./pages/home_page"));
const Timepage = lazy(() => import("./pages/timer_page"));
const Pending = lazy(() => import("./pages/pending_page"));

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/timer" element={<Timepage />} />
            <Route path="/pending" element={<Pending />} />
          </Routes>
        </Suspense>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default Routing;
