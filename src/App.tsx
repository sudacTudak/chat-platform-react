import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Hello, Home!</div>} />
        <Route
          path="conversations"
          element={
            <div>
              <div>Conversations</div>
              <Outlet />
            </div>
          }
        >
          <Route path=":id" element={<div>Conversation ID page</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
