import RecommendationCard from "./RecommendationCard";
import axios from "axios";
import { useQuery } from "react-query";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const Recommendations = () => {
  const { isLoading, data } = useQuery("recommendations", () =>
    axios
      .get("api/recommendations")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold dark:text-Snow">
        Recommendations
      </div>
      <div className="grid w-full h-full mt-5 justify-items-start grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8">
        {isLoading
          ? [1, 2, 3, 4].map((item) => (
              <ParagraphSkeleton
                key={`recommendations-skeleton-${item}`}
                className={"p-8 h-full w-full relative"}
              />
            ))
          : data?.map((recommendation) => (
              <RecommendationCard key={recommendation.id} data={recommendation} />
            ))}
      </div>
    </>
  );
};

export default Recommendations;
