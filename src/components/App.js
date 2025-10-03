import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
