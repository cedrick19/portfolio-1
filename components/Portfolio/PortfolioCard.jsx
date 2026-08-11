import Badge from "../Common/Badge";
import Image from "next/image";
import { FaGlobe } from "react-icons/fa";

const PortfolioCard = ({ data }) => {
  return (
    <article className="card_stylings hover-lift overflow-hidden h-full flex flex-col fade-up">
      <a
        href={data?.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${data?.projectName} project in a new tab`}
        className="flex flex-col h-full focus-visible:ring-2 focus-visible:ring-Green rounded-xl"
      >
        <Image
          src={`/${data?.image}`}
          alt={`${data?.projectName} preview`}
          width={800}
          height={360}
          className="w-full object-cover h-40 sm:h-48 md:h-56"
        />
        <div className="py-4 px-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-lg md:text-xl dark:text-Snow leading-tight">
              {data?.projectName}
            </h3>
            <span
              aria-hidden="true"
              className="dark:text-Snow text-Green shrink-0 mt-1 text-base transition-transform duration-300"
            >
              <FaGlobe />
            </span>
          </div>
          <p className="text-sm text-LightGray font-normal mt-2 flex-1">
            {data?.projectDetail}
          </p>
          <div className="text-sm flex flex-wrap gap-2 pt-3">
            {data?.technologiesUsed?.map((technology, index) => (
              <Badge
                key={`${data.id}-${technology.tech}-${index}`}
                title={technology.tech}
              />
            ))}
          </div>
        </div>
      </a>
    </article>
  );
};

export default PortfolioCard;
