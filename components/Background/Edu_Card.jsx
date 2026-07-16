import React from "react";
import CardLayout from "../Common/CardLayout";

const Edu_Card = ({ data }) => {
  return (
    <CardLayout>
      <div className="card_stylings transition px-8 py-10">
        <div className="flex justify-between">
          <div className="flex-initial text-[17px] dark:text-Snow font-semibold">
            {data.title}
          </div>
          <div className="flex justify-items-center justify-center text-gray-500 dark:text-LightGray bg-gray-100 dark:bg-DeepNightBlack ml-2 w-32 lg:w-28 h-10 text-xs rounded-full py-3 font-normal text-center">
            {" "}
            {data.year}{" "}
          </div>
        </div>
        <div className="text-xs text-gray-500 dark:text-LightGray font-normal italic mt-1 ">
          {data.degree}
        </div>
        <div className="text-gray-600 dark:text-LightGray text-sm font-normal mt-4 leading-relaxed">
          {data.detail}
        </div>
      </div>
    </CardLayout>
  );
};

export default Edu_Card;
