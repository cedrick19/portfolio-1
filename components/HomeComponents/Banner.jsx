import Typewriter from "typewriter-effect";
import BannerLayout from "../Common/BannerLayout";
import airconAnimation from "../../public/images/working.json";
import dynamic from "next/dynamic";
import { RESUME_URL } from "../../constants/constants";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const Banner = () => {
  return (
    <BannerLayout>
      <div className="relative z-20 flex flex-col items-center py-8 md:py-10 justify-center w-full bg-gradient-to-t dark:bg-DeepNightBlack">
        <div className="bg-LightGray/10 w-[95%] px-4 py-6 md:py-8 rounded-xl flex md:block fade-up">
          <div className="flex items-center md:items-center md:justify-around">
            <div className="">
              <div className="">
                <h1 className="text-3xl sm:text-4xl xl:text-5xl dark:text-Snow font-bold">
                  Ai Automation Developer
                </h1>
              </div>
              <div className="">
                <div className=" py-4 font-cascadia-normal dark:text-Snow pb-4 text-xs">
                  <span>
                    {"<"}
                    <span className="text-Green text-2xl font-bold">div</span>
                    {">"}{" "}
                    <span className="dark:text-Snow text-2xl font-bold">
                      {" "}
                      I am a{" "}
                      <span className="inline-block">
                        <Typewriter
                          options={{
                            strings: [
                              "Finance Innovation Developer",
                              "Power Platform Builder",
                              "AI Automation Engineer",
                              "Azure Solutions Developer",
                            ],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </span>
                    </span>{" "}
                    {"</"}
                    <span className="text-Green text-2xl  font-bold">div</span>
                    {">"}{" "}
                  </span>
                </div>
              </div>
              <button
                className="btn-29 dark:bg-Snow bg-DeepNightBlack"
                onClick={() => window.open(RESUME_URL, "_blank")}
              >
                <span className="text-container">
                  <span className="dark:text-black text-Snow">
                    Download Resume
                  </span>
                </span>
              </button>
            </div>
            <div className="w-48 h-52 relative hidden md:block  ">
              <Lottie
                animationData={airconAnimation}
                height="300px"
                loop={true}
                className=" absolute top-5 right-1 w-96 h-full "
              />
            </div>
          </div>
        </div>

        {/* details in row */}
        <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between w-full px-4 xl:px-8 2xl:px-16">
          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-Green font-bold">
              5+
            </span>
            <span className="text-xs dark:text-Snow">Projects</span>
          </div>

          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-Green font-bold">
              AI
            </span>
            <span className="text-xs dark:text-Snow">Workflow Optimization</span>
          </div>

          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-Green font-bold">
              M365
            </span>
            <span className="text-xs dark:text-Snow">
              Power Platform & Azure
            </span>
          </div>
        </div>
      </div>
    </BannerLayout>
  );
};

export default Banner;
