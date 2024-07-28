import CardLayout from "../../Common/CardLayout";

const ExpertiseCard = ({ data }) => {
  return (
    <CardLayout>
      <div className="h-full space-y-2 p-8 dark:card_stylings bg-LightGray/10">
        <div className=" dark:dark:text-Snow">{data.title}</div>
        <div className="text-sm dark:text-LightGray font-normal">
          {data.desc}
        </div>
      </div>
    </CardLayout>
  );
};

export default ExpertiseCard;
