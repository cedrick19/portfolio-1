import Typewriter from "typewriter-effect";
import BannerLayout from "../Common/BannerLayout";
import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa";
import airconAnimation from "../../public/images/working.json";
import Lottie from "lottie-react";
const Banner = () => {
  return (
    <BannerLayout>
      <div className="absolute inset-0  z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t dark:bg-DeepNightBlack">
        <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block">
          <div className="flex items-center md:items-center md:justify-around">
            <div className="">
              <div className="">
                <h1 className="text-3xl sm:text-4xl xl:text-5xl dark:text-Snow font-bold">
                  Hello, Check This Out!
                </h1>
              </div>
              <div className="">
                <div className=" py-4 font-cascadia-normal dark:text-Snow pb-4 text-xs h-20 lg:h-auto">
                  <span>
                    {"<"}
                    <span className="text-Green sm:text-base xl:text-lg font-bold">
                      div
                    </span>
                    {">"}{" "}
                    <span className="dark:text-Snow sm:text-xl xl:text-2xl font-bold">
                      {" "}
                      I am a{" "}
                      <span className="inline-block">
                        <Typewriter
                          options={{
                            strings: [
                              "MERN Stack Developer",
                              "NexJs Developer",
                            ],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </span>
                    </span>{" "}
                    {"</"}
                    <span className="text-Green sm:text-base xl:text-lg font-bold">
                      div
                    </span>
                    {">"}{" "}
                  </span>
                </div>
              </div>
              <button
                className="btn-29 dark:bg-Snow bg-DeepNightBlack"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1irJ-oNLXdKWTz1zPz4IzAV6HFE-sp84I/view?usp=sharing",
                    "_blank"
                  )
                }
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
            <span className="text-xs dark:text-Snow">Proven Projects</span>
          </div>

          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-Green font-bold">
              8+
            </span>
            <span className="text-xs dark:text-Snow">Freelance Clients</span>
          </div>

          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-Green font-bold"></span>
            <span className="text-xs dark:text-Snow">
              Professional Web Developer
            </span>
          </div>
        </div>
      </div>
    </BannerLayout>
  );
};

export default Banner;
