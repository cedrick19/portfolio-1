import Link from "next/link";
import { RESUME_URL } from "../../../constants/constants";

const Download = ({ icon }) => {
  return (
    <>
      <Link
        href={RESUME_URL}
        target="_blank"
        className="flex flex-row dark:text-LightGray items-center gap-x-4 pb-14 pt-4"
      >
        <span className="dark:text-Snow">Download Resume</span>
        <span>{icon}</span>
      </Link>
    </>
  );
};

export default Download;
