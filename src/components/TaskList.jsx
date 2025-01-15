// components/TaskList.jsx
import React from "react";

const TaskList = () => {
  const tasks = [
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Finish project report", completed: false },
    { id: 3, text: "Call the bank", completed: false },
    { id: 4, text: "Schedule dentist appointment", completed: false },
    { id: 5, text: "Plan weekend trip", completed: false },
  ];

  const completedTasks = [
    { id: 6, text: "Read a book", completed: true },
    { id: 7, text: "Clean the house", completed: true },
    { id: 8, text: "Prepare presentation", completed: true },
    { id: 9, text: "Update blog", completed: true },
  ];

  return (
    <div>
      <div className="flex items-center">
      <h3 className="font-semibold mb-2 text-[#97F69BB5] dark:text-[#142E159E]">To Do</h3>
      <img className="dark:invert" src="/caret-down.png" alt="" />
      </div>
      <div className="bg-[#496E4B33] p-4 rounded-lg mb-6 gap-10 dark:bg-cstgrad">
        <div className="py-8">
          <input
            type="text"
            placeholder="Add A Task"
            className="w-full bg-transparent p-2 rounded-lg focus:outline-none"
          />
        </div>
        <div className="flex justify-between items-center max-[502px]:flex-col  max-[502px]:gap-y-5">
          <div className="flex gap-4">
            <img className="dark:invert" src="/notification.png" alt="notification" />
            <img className="dark:invert" src="/bi_repeat.png" alt="bi_repeat" />
            <img className="dark:invert" src="/calendar.png" alt="calendar" />
          </div>
          <div>
            <button className="bg-[#357937E0] py-[8px] px-[16px] rounded-[8px] dark:bg-[#35793729] dark:text-[#357937] font-medium	">ADD TASK</button>
          </div>
        </div>
      </div>
      <div>
        <ul className="space-y-2">
        {tasks.map((task) => {
  return (
    <div key={task.id} className="flex items-center p-2 bg-[#242424] border-b rounded-lg border-[#496E4B33] justify-between dark:bg-[#FBFDFC] dark:text-[#1B281B]">
      <div>
      <input type="checkbox" className="mr-2" />
      <span>{task.text}</span>
      </div>
      <button>
        <img className="dark:invert" src="/star.png" alt="star" />
      </button>
    </div>
  );
})}

        </ul>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Completed</h3>
        <ul className="space-y-2">
          {completedTasks.map((task) => (
            <div key={task.id} className="flex items-center p-2 bg-[#242424] border-b rounded-lg border-[#496E4B33] justify-between dark:bg-[#FBFDFC] dark:text-[#1B281B]">
            <div className="flex gap-2">
            <input  type="checkbox" className="mr-2" class="accent-[#3F9142]" checked={true}/>
            <span className="line-through	">{task.text}</span>
            </div>
            <button>
              <img  className="dark:invert" src="/star.png" alt="star" />
            </button>
          </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
