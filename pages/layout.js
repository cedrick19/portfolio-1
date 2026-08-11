import { useState } from "react";
import { FaBars, FaMousePointer } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import Intro from "../components/Common/Intro";
import Nav from "../components/Common/Nav/Nav";
import Switcher from "../components/Switcher";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intro, setIntro] = useState(false);

  return (
    <div
      className={`h-screen lg:p-[0.8rem] flex flex-col select-none font-circular`}
    >
      <div className="lg:hidden">
        <div className="bg-white text-Black dark:bg-DeepNightBlack dark:text-LightGray w-full h-10 flex items-center justify-between px-2 lg:hidden relative">
          <button
            type="button"
            className="icon flex items-center gap-x-2 transition-transform duration-200 hover:scale-105"
            onClick={() => setIntro(!intro)}
            aria-label={intro ? "Close profile panel" : "Open profile panel"}
            aria-expanded={intro}
          >
            <span className="icon border-2 text-Green border-Green p-1 text-sm rounded-lg">
              <SlOptionsVertical />
            </span>
            <div className="dark:text-Snow absolute -right-1 -bottom-1">
              <FaMousePointer />
            </div>
          </button>
          <button
            type="button"
            className="icon flex items-center gap-x-2 transition-transform duration-200 hover:scale-105"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            <span className="icon border-2 text-Green border-Green p-1 text-sm rounded-lg">
              <FaBars />
            </span>
          </button>
        </div>
      </div>

      <div className="flex relative h-full justify-between gap-x-3">
        <div
          className={`w-64 h-screen left-0 lg:rounded-xl -top-10 lg:top-0 lg:left-0 lg:h-full overflow-hidden bg-white dark:bg-DeepNightBlack shadow-lg shadow-black/5 dark:shadow-black/40 z-50 lg:flex flex-col lg:relative ${
            intro ? "flex absolute" : "hidden"
          }`}
        >
          <Intro isOpen={intro} setIsOpen={setIntro} />
        </div>

        {intro && (
          <div
            onClick={(e) => setIntro(false)}
            className="fixed top-0 left-0 w-full h-full bg-Black/30 dark:bg-Black/50 backdrop-blur-[2px] z-40"
          ></div>
        )}

        <div className="w-full lg:rounded-xl h-auto lg:w-9/12 shadow-lg shadow-black/5 dark:shadow-black/40 bg-white dark:bg-DeepNightBlack relative overflow-auto overflow-x-hidden no-scrollbar fade-up">
          {children}
        </div>

        <div
          className={`hidden lg:block absolute  lg:w-20 lg:relative bg-white dark:bg-DeepNightBlack shadow-lg shadow-black/5 dark:shadow-black/40 rounded-xl overflow-hidden`}
        >
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="text-Green hidden lg:flex items-center h-16 justify-center text-2xl w-full"
          >
            <span className="icon border-2 border-Green p-2 rounded-xl z-[80]">
              <FaBars />
            </span>
          </button>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 flex items-center justify-center text-center text-xl text-gray-600 font-extrabold tracking-widest">
            NavBar
          </span>
          <Switcher />
        </div>

        {<Nav isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}
