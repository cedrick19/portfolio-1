import Link from "next/link";
const Download = ({ icon }) => {
  return (
    <>
      <Link
        href="https://drive.google.com/file/d/1PBuyyfEXTWEULB9I5YMG_jcaTzaBP0W3/view?usp=sharing"
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
