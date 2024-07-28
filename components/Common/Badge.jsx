import React from "react";

const Badge = ({ title }) => {
  return (
    <span className="py-2 px-3 text-xs dark:text-Snow dark:bg-EveningBlack rounded-full bg-LightGray/10">
      {title}
    </span>
  );
};

export default Badge;
