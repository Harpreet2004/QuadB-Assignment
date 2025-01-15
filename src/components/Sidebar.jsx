// components/Sidebar.jsx
import React from "react";

const Sidebar = () => {
 return (
    <div className="h-[52rem] w-64 bg-[#2C2C2C] p-4 flex flex-col dark:bg-[#EEF6EF] max-[556px]:w-[13rem] max-[457px]:h-[60rem] max-[430px]:w-[11rem] max-[430px]:h-[65rem] max-[390px]:w-[9.8rem] max-[375px]:hidden">
      <div className="text-center">
        <img
          src="src/assets/profile.png"
          alt="Profile"
          className="rounded-full w-20 h-20 mx-auto"
        />
        <h2 className="mt-4 font-semibold dark:text-[#1B281B]">Hey, ABCD</h2>
      </div>
      <div className="mt-6 bg-[#232323] dark:bg-[#FBFDFC] p-4">
        <ul className="py-2">
          <li className="py-2 px-4 rounded-lg hover:bg-gray-700 flex items-center gap-2 dark:text-[#1B281B] dark:hover:bg-gray-200 max-[430px]:flex-col">
            <span><img className="dark:invert" src="src/assets/hugeicons_task-01.png" alt="" /></span> All Tasks
          </li>
          <li className="py-2 px-4 rounded-lg bg-[#35793729] flex items-center gap-2 text-[#98E19B] dark:text-[#357937] font-medium max-[430px]:flex-col">
            <span><img className="dark:invert" src="src/assets/calendar.png" alt="" /></span> Today
          </li>
          <li className="py-2 px-4 rounded-lg hover:bg-gray-700 flex items-center gap-2 dark:text-[#1B281B] dark:hover:bg-gray-200 max-[430px]:flex-col">
            <span><img className="dark:invert" src="src/assets/clock.png" alt="" /></span> Important
          </li>
          <li className="py-2 px-4 rounded-lg hover:bg-gray-700 flex items-center gap-2 dark:text-[#1B281B] dark:hover:bg-gray-200 max-[430px]:flex-col">
          <span><img className="dark:invert" src="src/assets/clock-1.png" alt="" /></span> Pinned
          </li>
          <li className="py-2 px-4 rounded-lg hover:bg-gray-700 flex items-center gap-2 dark:text-[#1B281B] dark:hover:bg-gray-200 max-[430px]:flex-col">
          <span><img className="dark:invert" src="src/assets/clock-2.png" alt="" /></span> Assigned
          </li>
        </ul>
      </div>
      <div className="bg-[#232323] dark:bg-[#FBFDFC] p-10 mt-4">
        <div className="flex gap-x-4 justify-start items-start  max-[430px]:flex-col  max-[430px]:justify-center  max-[430px]:items-center  max-[430px]:gap-2">
          <img className="dark:invert" src="src/assets/vector.png" alt="plus-icon" />
          <h4 className="dark:text-[#1B281B] font-medium	">Add list</h4>
        </div>
      </div>
      <div className="bg-[#232323] dark:bg-[#FBFDFC] text-white p-4 rounded-lg shadow-md w-full mt-4">
      {/* Header Section */}
      <div className="flex flex-col items-start border-b-[2px] border-[#1B1B1B] dark:text-[#1B281B] dark:border-[#F0F0F0]">
        <div className="flex justify-center items-center gap-[58px] max-[430px]:flex-col max-[430px]:gap-[20px]">
        <h2 className="text-lg font-semibold ">Today Tasks</h2>
        <img className="dark:invert-0" src="src/assets/info.png" alt="info" />
        </div>
        <span>11</span>
      </div>

      

      {/* Legend Section */}
      <div className="flex justify-center flex-col space-x-4 mt-4 dark:text-[#1B281B]">
        <img src="src/assets/chart.png" alt="" />

        <div className="flex gap-4 max-[430px]:flex-col">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
          <p className="text-[9px]">Pending</p>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
          <p className="text-[9px]">Done</p>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
