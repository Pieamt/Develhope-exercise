import React from "react";
import { Route, Routes } from "react-router-dom";
import ClickCounter from "./ClickCounter";

export function App() {
  return (
      <Routes>
        <Route path="/counter" element={<ClickCounter/>} />
      </Routes>
  );
}
