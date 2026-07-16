import React from "react";
import CardLayout from "./CardLayout";

const shimmerBar =
  "h-2.5 rounded-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-white/5 dark:via-white/15 dark:to-white/5 bg-[length:200%_100%] animate-shimmer";

const ParagraphSkeleton = ({ className }) => {
  return (
    <CardLayout>
      <div
        role="status"
        className={`${className} max-w-full card_stylings self-center`}
      >
        <div className={`${shimmerBar} h-3 w-48 mb-4`}></div>
        <div className={`${shimmerBar} max-w-[365px] mb-2.5`}></div>
        <div className={`${shimmerBar} mb-2.5`}></div>
        <div className={`${shimmerBar} max-w-[330px] mb-2.5`}></div>
        <div className={`${shimmerBar} max-w-[400px] mb-2.5`}></div>
        <div className={`${shimmerBar} max-w-[360px]`}></div>
        <span className="sr-only">Loading...</span>
      </div>
    </CardLayout>
  );
};

export default ParagraphSkeleton;
