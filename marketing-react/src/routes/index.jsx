import React from "react";
import { Route, Routes } from "react-router-dom";
import { Pricing } from "../pages/pricing";
import { LandingPage } from "../pages/landing-page";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
};
