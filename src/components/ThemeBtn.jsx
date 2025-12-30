import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeBtn = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const handleTheme = ()=> setIsDark(!isDark)
  return (
    <>
      <button
        className="cursor-pointer"
        onClick={handleTheme}
      >
        {isDark ? <Moon className="text-yellow-400 rotate-moon"></Moon> : <Sun className="text-pink-400 rotate-sun"></Sun>}
      </button>
    </>
  );
};

export default ThemeBtn;
