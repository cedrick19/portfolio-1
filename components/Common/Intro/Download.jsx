import Link from "next/link";
const Download = ({ icon }) => {
  return (
    <>
      <Link
        href="https://drive.google.com/file/d/18HW2kiSht5CyTB-JPgKydLvwRJ44-U2C/view?usp=sharing"
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
