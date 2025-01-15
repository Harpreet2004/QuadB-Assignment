import React,{useState, useEffect} from "react";


const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Apply the theme to the <html> element
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); // Save theme to local storage
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");

  }


  
  return (
    <nav className="bg-[#242424] text-white shadow-lg dark:bg-[#FBFDFC] ">
      <div className="flex items-center justify-between px-6 h-16 ">
        
        <div className="flex items-center space-x-3">
          <button className="p-2 rounded-md hover:bg-gray-700 dark:hover:bg-gray-200">
            
            <img className="invert dark:invert-0" src="/menu.png" alt="menu" />
          </button>
          <img className="max-[375px]:h-[15px]" src="/logo.png" alt="logo" />
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-md hover:bg-gray-700 dark:hover:bg-gray-200">
            <img className="dark:invert" src="/search.png" alt="search" />
          </button>
            <button className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 focus:outline-none dark:hover:bg-gray-200">
              <img
                src="/app-grid.png"
                alt="Profile"
                className="rounded-full w-6 h-6 dark:invert"
              />
            </button>
            <button
      onClick={toggleTheme}
      className="p-2 rounded-lg"
    >
      {theme === "light" ?
        <button className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 focus:outline-none dark:hover:bg-gray-200">
       <img className="rounded-full w-6 h-6 dark:invert" src="/toggle.png" alt="" /> 
       </button>
       : 
        <button className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 focus:outline-none dark:hover:bg-gray-200">
      <img className="dark:hover:bg-gray-200 rounded-full w-6 h-6" src="/night.png" alt="" />
      </button>
      }
    </button>
      
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
