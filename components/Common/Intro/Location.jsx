import { DETAILS } from "../../../constants/constants";
import { getObjectKeys } from "../../../utils/utils";

const Location = () => {
  const keys = getObjectKeys(DETAILS);
  return (
    <div className="flex flex-col space-y-1 pt-6">
      {keys.map((key, index) => {
        return (
          <div key={index} className="flex items-center justify-between">
            <span className="dark:text-Snow text-xs font-bold">{key}</span>
            <span className="text-xs dark:text-Snow">{DETAILS[key]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Location;
