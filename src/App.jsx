// App.jsx
import React from "react";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <div className="flex h-screen bg-[#2C2C2C] text-white dark:bg-[#FBFDFC] ">
      <Sidebar />
      <main className="flex-1 p-6 bg-[#242424] h-[52rem] dark:bg-[#FBFDFC] max-[457px]:h-[60rem] max-[430px]:h-[65rem]">
        <TaskList />
      </main>
    </div>
    </>
  );
}

export default App;
