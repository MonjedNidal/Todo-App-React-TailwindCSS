import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const handleThemeSwitch = () => {
    setIsDarkTheme((isDarkTheme) => !isDarkTheme);
  };
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

  return (
    <div className="relative transition transform dark:bg-VeryDarkBlue font-JosefinSans flex flex-col content-center h-screen">
      <Navbar isDarkTheme={isDarkTheme} />
      <Main handleThemeSwitch={handleThemeSwitch} isDarkTheme={isDarkTheme} />
    </div>
  );
}

export default App;
