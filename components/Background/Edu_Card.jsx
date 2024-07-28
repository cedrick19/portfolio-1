import React from "react";
import CardLayout from "../Common/CardLayout";

const Edu_Card = ({ data }) => {
  return (
    <CardLayout className="keepItEmpty">
      <div className="dark:card_stylings transition px-8 py-10 bg-LightGray/10">
        <div className="flex justify-between">
          <div className="flex-initial text-[17px] dark:text-Snow font-medium">
            {data.title}
          </div>
          <div className="flex justify-items-center justify-center dark:text-LightGray dark:bg-DeepNightBlack ml-2 w-32 lg:w-28 h-10 text-xs rounded-full py-3 font-normal opacity-50 text-center">
            {" "}
            {data.year}{" "}
          </div>
        </div>
        <div className="text-xs dark:text-LightGray font-normal italic mt-1 ">
          {data.degree}
        </div>
        <div className="dark:text-LightGray text-sm font-normal mt-4 ">
          {data.detail}
        </div>
      </div>
    </CardLayout>
  );
};

export default Edu_Card;
