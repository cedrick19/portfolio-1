import { AiFillCopyrightCircle } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { CONTACTS, NAME } from "../constants/constants";

const Footer = () => {
  return (
    <div id="intro" className="mt-4 mb-10 lg:mb-0">
      <div className="flex h-10 items-center justify-between text-xs font-normal dark:text-LightGray py-4 px-2 md:px-4 w-full dark:bg-DeepNightBlack">
        <div className="flex items-center">
          <div className="mr-1 text-base">
            <AiFillCopyrightCircle />
          </div>
          <span>{new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center">
          <span>
            Made with ❤️ by <span className="font-bold">Ced</span>
          </span>
        </div>
        <a
          href={`mailto:${CONTACTS.EMAIL}`}
          aria-label={`Email ${NAME}`}
          className="hidden md:flex items-center hover:text-Green transition-all duration-200 hover:-translate-y-0.5"
        >
          <div className="mr-1 text-base">
            <MdMail />
          </div>
          <div className="dark:text-Snow ">{NAME}</div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
