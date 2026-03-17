import React from "react";
import Image from "next/image";
import CardLayout from "../../Common/CardLayout";

const RecommendationCard = ({ data }) => {
  return (
    <CardLayout>
      <div className="p-8 h-full relative card_stylings transition">
        <Image
          src={`/${data?.image}`}
          alt={`${data?.name} profile`}
          width={64}
          height={64}
          className="absolute z-10 right-10 -top-5 border-Green w-16 h-16  border-[3px] rounded-full m-0"
        />
        <div className=" dark:text-Snow underline italic">
          <a href={data?.linkednURL} target="_blank" rel="noreferrer">
            {data?.name}
          </a>
        </div>
        <div className="text-xs dark:text-LightGray italic mt-1">
          {data?.designation}
        </div>
        <div className="text-sm mt-2 dark:text-LightGray font-normal ">
          {data?.view}
        </div>
      </div>
    </CardLayout>
  );
};

export default RecommendationCard;
