"use client";
import emailjs from "emailjs-com";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { AnimationMove } from "../Amimation/AnimationMove";

const page = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4m6nlia",
        "template_fv6d61e",
        form.current,
        "gaWz-pkJdZjnKYvxA",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };

  return (
    <div className="container ">
      <AnimationMove customDelay={1}>
        <div className=" mt-36 text-center text-2xl font-bold md:text-5xl">
          My Introduction
        </div>
      </AnimationMove>
      <div className="mt-20 flex flex-col justify-between gap-12 md:flex-row md:gap-0 ">
        <div className=" flex w-full flex-col gap-4 md:w-[30%]">
          <AnimationMove customDelay={1} customX={-75}>
            <div className="box relative flex flex-col items-center     justify-center rounded-2xl border-2 border-solid border-sky-200   px-4 py-[10px] text-center shadow-xl shadow-gray-400/20 duration-300 ease-in hover:bg-transparent">
              <MdOutlineEmail size={20} />
              <div className="mt-[10px]  text-sm ">Email</div>
              <div className="mt-[10px] text-sm font-medium text-gray-400">
                dimakurinnoy8@mail.com
              </div>
              <a
                href="mailto:dimakurinnoy8@gmail.com"
                className="z-10 mt-[10px] text-sm font-medium"
                target="_blank"
                rel="noreferrer"
              >
                Send a massage
              </a>
            </div>
          </AnimationMove>
          <AnimationMove customDelay={2} customX={-75}>
            <div className="box relative flex flex-col items-center justify-center rounded-2xl border-2 border-solid border-sky-200   px-4 py-[10px] text-center shadow-xl shadow-gray-400/20 duration-300 ease-in hover:bg-transparent">
              <FaTelegram size={20} />
              <div className="mt-[10px]  text-sm ">Telegram</div>
              <div className="mt-[10px] text-sm font-medium text-gray-400">
                @dima
              </div>
              <a
                href="https://t.me/Dmytro_Kurinnyi"
                target="_blank"
                rel="noreferrer"
                className="z-10 mt-[10px] text-sm font-medium"
              >
                Send a massage
              </a>
            </div>
          </AnimationMove>
          <AnimationMove customDelay={3} customX={-75}>
            <div className="box relative flex flex-col items-center justify-center rounded-2xl border-2 border-solid border-sky-200  px-4 py-[10px] text-center shadow-xl shadow-gray-400/20 duration-300 ease-in hover:bg-transparent">
              <IoLogoWhatsapp size={20} />
              <div className="mt-[10px]  text-sm ">Mobile number</div>
              <div className="mt-[10px] text-sm font-medium text-gray-400">
                +48575870237
              </div>
              <a
                href="tel:+48575870237"
                target="_blank"
                rel="noreferrer"
                className="z-10 mt-[10px] text-sm font-medium"
              >
                Send or call
              </a>
            </div>
          </AnimationMove>
        </div>
        <form
          className="flex w-full flex-col gap-6 md:w-[55%]"
          onSubmit={sendEmail}
        >
          <AnimationMove customDelay={1} customX={75}>
            <div className="relative  ">
              <input
                className="peer w-full  rounded-lg border-2  bg-gray-400/10 p-6 outline-none valid:border-solid valid:border-sky-200 focus:border-solid focus:border-sky-200"
                type="text"
                name="name"
                required
              />
              <span className=" pointer-events-none absolute left-0 p-6 text-lg  transition-all duration-500 peer-valid:translate-x-4 peer-valid:translate-y-[-10px] peer-valid:rounded-lg peer-valid:bg-gray-300  peer-valid:px-3 peer-valid:py-0 peer-valid:text-sm peer-focus:translate-x-4 peer-focus:translate-y-[-10px] peer-focus:rounded-lg peer-focus:bg-gray-300 peer-focus:px-3 peer-focus:py-0 peer-focus:text-sm">
                Your Full Name
              </span>
            </div>
          </AnimationMove>
          <AnimationMove customDelay={2} customX={75}>
            <div className="relative">
              <input
                className="peer w-full  rounded-lg border-2  bg-gray-400/10 p-6 outline-none valid:border-solid valid:border-sky-200 focus:border-solid focus:border-sky-200"
                type="email"
                name="email"
                required
              />
              <span className="pointer-events-none absolute left-0 p-6 text-lg  transition-all duration-500 peer-valid:translate-x-4 peer-valid:translate-y-[-10px] peer-valid:rounded-lg peer-valid:bg-gray-300  peer-valid:px-3 peer-valid:py-0 peer-valid:text-sm peer-focus:translate-x-4 peer-focus:translate-y-[-10px] peer-focus:rounded-lg peer-focus:bg-gray-300 peer-focus:px-3 peer-focus:py-0 peer-focus:text-sm">
                Your email
              </span>
            </div>
          </AnimationMove>
          <AnimationMove customDelay={3} customX={75}>
            <div className="relative">
              <textarea
                className="peer w-full  rounded-lg border-2  bg-gray-400/10 p-6 outline-none valid:border-solid valid:border-sky-200 focus:border-solid focus:border-sky-200"
                name="massage"
                rows="7"
                required
              />
              <span className="pointer-events-none absolute left-0 p-6 text-lg  transition-all duration-500 peer-valid:translate-x-4 peer-valid:translate-y-[-10px] peer-valid:rounded-lg peer-valid:bg-gray-300  peer-valid:px-3 peer-valid:py-0 peer-valid:text-sm peer-focus:translate-x-4 peer-focus:translate-y-[-10px] peer-focus:rounded-lg peer-focus:bg-gray-300 peer-focus:px-3 peer-focus:py-0 peer-focus:text-sm ">
                Your massage
              </span>
            </div>
          </AnimationMove>
          <AnimationMove customDelay={4} customY={75}>
            <div className="text-center">
              <button type="submit" className="btn btn-project ">
                Send Message
              </button>
            </div>
          </AnimationMove>
        </form>
      </div>
    </div>
  );
};

export default page;
