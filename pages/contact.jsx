import { useState } from "react";
import BannerLayout from "../components/Common/BannerLayout";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { HiMail, HiUser } from "react-icons/hi";
import { BsChatTextFill } from "react-icons/bs";
import Fiverr_Icon from "../components/Fiverr_Icon";
import Footer from "../components/Footer";
import { Modal } from "antd";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BannerLayout>
      <div className=" px-4 py-2">
        <div className="my-6 dark:text-Snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Contact Information</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            <div className="dark:card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4 bg-LightGray/10">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Country:</span>
                <span className="dark:text-LightGray md:text-sm">
                  Philippines
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">City:</span>
                <span className="dark:text-LightGray md:text-sm">
                  San Jose Del Monte Bulacan
                </span>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18346.778520239597!2d121.07023947822609!3d14.828901671262999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a5ed4b681ed3%3A0x199235c4446454c7!2sSanto%20Cristo%2C%20Lungsod%20ng%20San%20Jose%20del%20Monte%2C%20Bulakan!5e0!3m2!1sfil!2sph!4v1716183212759!5m2!1sfil!2sph"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen="yes"
                loading="lazy"
              />
            </div>
            <div className="dark:card_stylings bg-LightGray/10 rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Email:</span>
                <span className="dark:text-LightGray text-sm">
                  cedrick.christian16@gmail.com
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Linkedin:</span>
                <span className="dark:text-LightGray text-sm">
                  cedrick-christian-gueta-740131157
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Phone1:</span>
                <span className="dark:text-LightGray text-sm">
                  +976 126 1370
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Phone2:</span>
                <span className="dark:text-LightGray text-sm">
                  +961 565 6115
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Github</span>
                <span className="dark:text-LightGray md:text-sm">
                  github.com/cedrick19
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Freelance</span>
                <span className="dark:text-LightGray text-sm">Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-16 w-full dark:card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center  dark:text-Snow">
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to={{cedrick.christian16@gmail.com}}&su=Subject&body=Body%20Text"
            target="_blank"
            rel="noreferrer"
          >
            <HiMail />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://github.com/cedrick19"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://www.linkedin.com/in/cedrick-christian-gueta-740131157/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="my-12 w-full h-auto dark:text-Snow">
          <h1 className="text-lg font-bold">Get In Touch</h1>
          <div className="mt-4 py-8 px-8 dark:bg-EveningBlack rounded-xl text-sm bg-LightGray/10">
            <div>
              <div className="flex flex-col w-full">
                <div className="userIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none"
                  >
                    <HiUser />
                  </div>
                  <input
                    type="text"
                    className="input_stylings"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="mailIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none"
                  >
                    <HiMail />
                  </div>
                  <input
                    type="text"
                    className="input_stylings"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="textIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none"
                  >
                    <BsChatTextFill />
                  </div>
                  <textarea
                    rows={6}
                    cols={50}
                    className="input_stylings"
                    placeholder="Message"
                  />
                </div>
              </div>

              <div className="my-4">
                <button onClick={() => setIsOpen(true)} className="button">
                  {" "}
                  SEND MESSAGE{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* success modal */}
      <Modal
        className="dark:card_stylings backdrop-blur-3xl drop-shadow-2xl"
        // wrapClassName='bg-red-800'
        centered
        open={isOpen}
        footer={null}
        closable={false}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-Green font-bold text-2xl">Thank you</h1>
          <a className="underline dark:text-Snow" target="" href="">
            the email has been sent!
          </a>
        </div>
      </Modal>
      <Footer />
    </BannerLayout>
  );
};

export default Contact;
