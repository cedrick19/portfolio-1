import React from "react";
import CardLayout from "../Common/CardLayout";

const Exp_Card = ({ data }) => {
  return (
    <CardLayout>
      <div className="card_stylings transition px-8 py-10">
        <div className="flex-initial text-[17px] dark:text-Snow font-semibold">
          {data.title}
        </div>
        <div className="text-sm text-gray-500 dark:text-LightGray font-normal italic mt-1 ">
          {data.role}
        </div>
        {data.url && data.url !== "no website" && (
          <div className="text-gray-400 dark:text-LightGray text-xs font-normal italic">
            <a href={data.url} target="_blank" rel="noreferrer">
              {data.url}
            </a>
          </div>
        )}
        <div className="text-gray-600 dark:text-LightGray text-sm font-normal mt-4 text-justify leading-relaxed">
          {data.desc}
        </div>
        <div className="flex justify-between text-gray-500 dark:text-LightGray bg-gray-100 dark:bg-DeepNightBlack w-full h-auto text-xs rounded-full py-3 px-6 mt-4 font-normal">
          <div>{data.year}</div> <div>{data.location}</div>
        </div>
      </div>
    </CardLayout>
  );
};

export default Exp_Card;
