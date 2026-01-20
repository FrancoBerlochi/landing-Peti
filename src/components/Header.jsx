import ThemeBtn from "./ThemeBtn";
import BtnCommerce from "./BtnCommerce";
import { Brush, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const navNames = [
    { name: "Galería", href: "#Galería" },
    { name: "Sobre mí", href: "#Sobre-mí" },
    { name: "Comisiones", href: "#Comisiones" },
    { name: "Contacto", href: "#Contacto" },
  ];

  const toTop = () => window.scrollTo(0, 0);
  const handleMenu = () => setMenu(!menu);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menu);
    return () => document.body.classList.remove("no-scroll");
  }, [menu]);

  return (
    <>
      <header
        className="bg-white dark:bg-[#444] sticky top-0 w-full z-40 transition-colors duration-300 p-5 overflow-x-hidden"
        id="header"
      >
        <div className="flex justify-between text-[#e1488c]">
          <Brush
            className="h-10 w-10 max-md:block hidden"
            onClick={toTop}
          ></Brush>
          <button className="hidden max-md:block" onClick={handleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-menu-icon lucide-menu"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>
        </div>
        <nav
          className={`${
            menu
              ? `max-md:h-screen max-md:flex max-md:flex-col`
              : `h-0 w-0 translate-x-[100vw]`
          } z-30 fixed bg-[#e1488c] dark:bg-[#333] transition-all duration-300 w-screen top-0 bottom-0 left-0`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full flex justify-between items-center">
            <ThemeBtn></ThemeBtn>
            <button
              className={`${
                menu ? `w-fit h-fit  mr-5 mt-7` : `hidden`
              } text-[#fee] dark:text-[#e1488c]`}
              onClick={handleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-menu-icon lucide-menu"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </button>
          </div>
          <div
            className={`flex flex-col items-center gap-24 mt-[13vh] mb-[55vh] transition-all duration-300 ${
              menu ? `text-5xl` : `text-[0px]`
            } text-[#fee] dark:text-[#e1488c]`}
          >
            {navNames.map((n) => {
              return (
                <a href={n.href} className="" onClick={handleMenu}>
                  {n.name}
                </a>
              );
            })}
          </div>
        </nav>
        <nav className="flex justify-between items-center max-md:hidden">
          <div className="text-[#e1488c] flex gap-3 text-2xl align-center justify-center">
            <Brush className="h-10 w-10 "></Brush>
            <h2 className="">
              {" "}
              <a className="cursor-pointer" onClick={toTop}>
                Allyn
              </a>
            </h2>
          </div>
          <div className="flex gap-6 text-pink-800 dark:text-pink-400 items-center">
            {navNames.map((n) => {
              return (
                <a
                  href={n.href}
                  className="hover:text-red-400 dark:hover:text-pink-300"
                >
                  {n.name}
                </a>
              );
            })}
            <ThemeBtn></ThemeBtn>
          </div>
          <div className="flex gap-8 items-center">
            <a
              href=""
              className="flex gap-4 border-1 border-pink-400 rounded-md p-2 text-pink-400 hover:bg-[#6661]"
            >
              <Mail></Mail> Contacto
            </a>
            <BtnCommerce></BtnCommerce>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
