import React from "react";
import { ImCross } from "react-icons/im";
import { FiAward } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { HiIdentification } from "react-icons/hi";
import NavItem from "./NavItem";
import DrawerLayout from "../DrawerLayout";
import Switcher from "../../../components/Switcher";

const Nav = ({ setIsOpen, isOpen }) => {
  return (
    <DrawerLayout setIsOpen={setIsOpen} isOpen={isOpen}>
      <div className="absolute z-50 flex flex-col justify-center lg:inset-y-0 bg-white -right-0 lg:right-0 w-64 h-screen lg:mt-3 lg:mr-3 lg:h-[96%] dark:bg-DeepNightBlack shadow-2xl md:rounded-xl md:overflow-hidden">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close navigation menu"
          className="flex dark:text-Snow absolute top-0 w-full items-center bg-white justify-start pl-6 text-sm h-10 dark:bg-EveningBlack"
        >
          <ImCross />
        </button>

        <div className="flex flex-col gap-y-2 px-6 w-full transition">
          <NavItem
            setIsOpen={setIsOpen}
            NavRoute={"/"}
            NavIcon={<ImHome />}
            NavText={"Home"}
          />
          <NavItem
            setIsOpen={setIsOpen}
            NavRoute={"/contact"}
            NavIcon={<FaHandshake />}
            NavText={"Contact"}
          />
          <NavItem
            setIsOpen={setIsOpen}
            NavRoute={"/background"}
            NavIcon={<HiIdentification />}
            NavText={"Background"}
          />
          <NavItem
            setIsOpen={setIsOpen}
            NavRoute={"/portfolio"}
            NavIcon={<FiAward />}
            NavText={"Projects"}
          />
          <div className="lg:hidden">
            <Switcher />
          </div>
        </div>
      </div>
    </DrawerLayout>
  );
};

export default Nav;
