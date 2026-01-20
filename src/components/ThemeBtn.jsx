import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeBtn = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const handleTheme = ()=> setIsDark(!isDark)
  return (
    <>
      <button
        className="cursor-pointer max-md:ml-5 max-md:mt-7"
        onClick={handleTheme}
      >
        {isDark ? (
          <Moon className="rotate-moon max-md:h-8 max-md:w-8"></Moon>
        ) : (
          <Sun className="text-[#f994a5] max-md:text-pink-200 rotate-sun max-md:h-8 max-md:w-8 "></Sun>
        )}
      </button>
    </>
  );
};

export default ThemeBtn;
