import Link from "next/link";
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaViber,
} from "react-icons/fa";
import Contact from "./Contact";
import Download from "./Download";
import Languages from "./Languages";
import Location from "./Location";
import Tools from "./Tools";
import Skills from "./Skills";
import Image from "next/image";
import { NAME, DESIGNATION, SOCIAL_LINKS } from "../../../constants/constants";
import ProfilePicture from "../../../public/images/dp.png";

const Intro = () => {
  return (
    <>
      {/* header */}
      <div className="header z-50 flex-none card_stylings backdrop-blur-sm flex items-center justify-center w-full flex-col px-6 py-6 gap-y-3 fade-up">
        <div className="flex items-center gap-4">
          <Image
            className="w-20 h-20 rounded-full object-cover"
            src={ProfilePicture}
            alt={`${NAME} profile picture`}
            priority
          />
          <div className="flex flex-col items-start">
            <span className="dark:text-Snow text-xl font-semibold leading-tight">
              {NAME}
            </span>
            <span className="text-gray-600 dark:text-SilverGray text-sm mt-1">
              {DESIGNATION}
            </span>
          </div>
        </div>
        <div className="mt-3 w-full flex justify-center gap-3">
          <Download icon={<FaDownload />} />
        </div>
      </div>

      {/* scrollable middle */}
      <div className="beech z-20 flex flex-col flex-1 min-h-0 overflow-y-scroll space-y-6 divide-y divide-gray-100 dark:divide-white/10 dark:bg-DeepNightBlack bg-white overflow-x-hidden no-scrollbar px-4">
        <Location />
        <Languages />
        <Skills />
        <Tools />
        <Contact />
        <Download icon={<FaDownload />} />
      </div>

      {/* footer */}
      <div className="footer flex-none flex justify-center space-x-6 text-xl items-center z-50 h-10 w-full dark:bg-DeepNightBlack bg-white dark:text-Snow">
        <Link
          href={SOCIAL_LINKS.GITHUB}
          target="_blank"
          rel="noreferrer"
          aria-label={`${NAME} on GitHub`}
          className="transition-transform duration-200 hover:-translate-y-0.5 hover:text-Green"
        >
          <FaGithub />
        </Link>
        <Link
          href={SOCIAL_LINKS.FACEBOOK}
          target="_blank"
          rel="noreferrer"
          aria-label={`${NAME} on Facebook`}
          className="transition-transform duration-200 hover:-translate-y-0.5 hover:text-Green"
        >
          <FaFacebook />
        </Link>
        <Link
          href={SOCIAL_LINKS.VIBER}
          target="_blank"
          rel="noreferrer"
          aria-label={`${NAME} on Viber`}
          className="transition-transform duration-200 hover:-translate-y-0.5 hover:text-Green"
        >
          <FaViber />
        </Link>
        <Link
          href={SOCIAL_LINKS.LINKEDIN}
          target="_blank"
          rel="noreferrer"
          aria-label={`${NAME} on LinkedIn`}
          className="transition-transform duration-200 hover:-translate-y-0.5 hover:text-Green"
        >
          <FaLinkedin />
        </Link>
      </div>
    </>
  );
};

export default Intro;
