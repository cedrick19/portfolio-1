import { useRef, useState } from "react";
import Head from "next/head";
import emailjs from "@emailjs/browser";
import BannerLayout from "../components/Common/BannerLayout";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiUser } from "react-icons/hi";
import { BsChatTextFill } from "react-icons/bs";
import Footer from "../components/Footer";
import { Modal } from "antd";
import { NAME, DETAILS, CONTACTS, SOCIAL_LINKS } from "../constants/constants";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    const form = formRef.current;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    form.elements.time.value = new Date().toLocaleString("en-PH", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    setIsSending(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY })
      .then(() => {
        setIsOpen(true);
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS send error:", error);
        setErrorMsg(
          "Something went wrong while sending your message. Please try again."
        );
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <BannerLayout>
      <Head>
        <title>{`Contact | ${NAME}`}</title>
        <meta
          name="description"
          content={`Get in touch with ${NAME} for collaborations, opportunities, or questions.`}
        />
      </Head>
      <div className=" px-4 py-2">
        <div className="my-6 dark:text-Snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Contact Information</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Country:</span>
                <span className="dark:text-LightGray md:text-sm">
                  {DETAILS.Residence}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">City:</span>
                <span className="dark:text-LightGray md:text-sm">
                  {DETAILS.City}
                </span>
              </div>

              <iframe
                title={`Map showing ${DETAILS.City}`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18346.778520239597!2d121.07023947822609!3d14.828901671262999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a5ed4b681ed3%3A0x199235c4446454c7!2sSanto%20Cristo%2C%20Lungsod%20ng%20San%20Jose%20del%20Monte%2C%20Bulakan!5e0!3m2!1sfil!2sph!4v1716183212759!5m2!1sfil!2sph"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen="yes"
                loading="lazy"
              />
            </div>
            <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Email:</span>
                <span className="dark:text-LightGray text-sm">
                  {CONTACTS.EMAIL}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Phone:</span>
                <span className="dark:text-LightGray text-sm">
                  {CONTACTS.PHONE}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Linkedin:</span>
                <span className="dark:text-LightGray text-sm">
                  cedrick-christian-gueta-740131157
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Github</span>
                <span className="dark:text-LightGray md:text-sm">
                  github.com/cedrick19
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Focus</span>
                <span className="dark:text-LightGray text-sm">
                  AI, Automation & Cloud
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center  dark:text-Snow">
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${CONTACTS.EMAIL}&su=Subject&body=Body%20Text`}
            target="_blank"
            rel="noreferrer"
            aria-label="Email me"
          >
            <HiMail />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href={SOCIAL_LINKS.GITHUB}
            target="_blank"
            rel="noreferrer"
            aria-label="My GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href={SOCIAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noreferrer"
            aria-label="My LinkedIn profile"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="my-12 w-full h-auto dark:text-Snow">
          <h1 className="text-lg font-bold">Get In Touch</h1>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="mt-4 py-8 px-8 dark:bg-EveningBlack rounded-xl text-sm bg-gray-50 border border-black/5 dark:border-none"
          >
            <input type="hidden" name="time" />
            <div className="flex flex-col w-full">
              <div className="userIcon relative mb-6">
                <label htmlFor="contact-name" className="sr-only">
                  Name
                </label>
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none"
                >
                  <HiUser />
                </div>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="input_stylings"
                  placeholder="Name"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="mailIcon relative mb-6">
                <label htmlFor="contact-email" className="sr-only">
                  Email
                </label>
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none"
                >
                  <HiMail />
                </div>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="input_stylings"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="textIcon relative mb-6">
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <div
                  aria-hidden="true"
                  className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none"
                >
                  <BsChatTextFill />
                </div>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  cols={50}
                  className="input_stylings"
                  placeholder="Message"
                  required
                />
              </div>
            </div>

            <div className="my-4">
              <button
                type="submit"
                className="button disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "SEND MESSAGE"}
              </button>
              {errorMsg && (
                <p role="alert" className="text-red-500 text-xs mt-2">
                  {errorMsg}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
      {/* success modal */}
      <Modal
        className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
        centered
        open={isOpen}
        footer={null}
        closable={false}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-Green font-bold text-2xl">Thank you</h1>
          <p className="dark:text-Snow">
            Your message has been sent successfully. I&apos;ll get back to
            you soon!
          </p>
          <button
            className="underline dark:text-Snow mt-2"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </Modal>
      <Footer />
    </BannerLayout>
  );
};

export default Contact;
