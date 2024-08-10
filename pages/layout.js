import { useState, useRef } from "react";
import { FaBars, FaMousePointer } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import StickyCursor from "../components/stickyCursor";
import Intro from "../components/Common/Intro";
import Nav from "../components/Common/Nav/Nav";
import Switcher from "../components/Switcher";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intro, setIntro] = useState(false);
  const stickyBarsRef = useRef(null);

  return (
    <div
      className={`h-screen lg:p-[0.8rem] flex flex-col select-none font-circular`}
    >
      <StickyCursor stickyElement={stickyBarsRef} />

      <div className="lg:hidden">
        <div className="dark:bg-DeepNightBlack dark:text-LightGray w-full h-10 flex items-center justify-between px-2 lg:hidden relative">
          <div
            className="icon flex items-center gap-x-2"
            onClick={(e) => setIntro(!intro)}
          >
            <span className="icon border-2 text-Green border-Green p-1 text-sm rounded-lg">
              <SlOptionsVertical />
            </span>
            <div className="dark:text-Snow absolute -right-1 -bottom-1">
              <FaMousePointer />
            </div>
          </div>
          <div
            className="icon flex items-center gap-x-2"
            onClick={(e) => setIsOpen(!isOpen)}
            ref={stickyBarsRef}
          >
            <span className="icon border-2 text-Green border-Green p-1 text-sm rounded-lg">
              <FaBars />
            </span>
          </div>
        </div>
      </div>

      <div className="flex relative h-full justify-between gap-x-3">
        <div
          className={`w-64 h-screen left-0 lg:rounded-xl -top-10 lg:top-0 lg:left-0 lg:h-full overflow-hidden dark:bg-DeepNightBlack shadow-2xl z-50 lg:flex flex-col lg:relative ${
            intro ? "flex absolute" : "hidden"
          }`}
        >
          <Intro isOpen={intro} setIsOpen={setIntro} />
        </div>

        {intro && (
          <div
            onClick={(e) => setIntro(false)}
            className="fixed top-0 left-0 w-full h-full dark:bg-Black/50 backdrop-blur-[2px] z-40"
          ></div>
        )}

        <div className="w-full lg:rounded-xl h-auto lg:w-9/12 shadow-2xl dark:bg-DeepNightBlack relative overflow-auto overflow-x-hidden no-scrollbar">
          {children}
        </div>

        <div
          className={`hidden lg:block absolute  lg:w-20 lg:relative dark:bg-DeepNightBlack shadow-2xl rounded-xl overflow-hidden`}
        >
          <div
            onClick={(e) => setIsOpen(!isOpen)}
            className="dark:bg-DeepNightBlack text-Green hidden lg:flex items-center h-16 justify-center text-2xl "
            ref={stickyBarsRef}
          >
            <span className="icon border-2 border-Green p-2 rounded-xl z-[80]">
              <FaBars />
            </span>
          </div>
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
