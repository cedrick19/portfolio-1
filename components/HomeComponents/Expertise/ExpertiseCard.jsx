import CardLayout from "../../Common/CardLayout";

const ExpertiseCard = ({ data }) => {
  return (
    <CardLayout>
      <div className="h-full space-y-3 p-8 card_stylings hover-lift">
      
        <div className="font-semibold text-base dark:text-Snow">
          {data.title}
        </div>
        <div className="text-sm text-gray-500 dark:text-LightGray font-normal leading-relaxed">
          {data.desc}
        </div>
      </div>
    </CardLayout>
  );
};

export default ExpertiseCard;
