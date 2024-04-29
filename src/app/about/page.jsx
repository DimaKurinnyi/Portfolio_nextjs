import Image from "next/image";

import { IoDocumentText, IoLogoReact } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { AnimationMove } from "../Amimation/AnimationMove";
import introImg from "../asset/intro.jpeg";
import Skills from "../components/Skills";

const page = () => {
  return (
    <div className="container">
      <AnimationMove customDelay={1}>
        <div className="mt-36 text-center text-2xl font-bold md:text-5xl">
          My Introduction
        </div>
      </AnimationMove>
      <div className=" mt-20 flex flex-col justify-between md:flex-row">
        <AnimationMove customDelay={2} customX={-75}>
          <Image
            className=" mb-10 overflow-hidden rounded-full"
            src={introImg}
            alt="photo"
            width={500}
            height={500}
          ></Image>
        </AnimationMove>
        <div className=" md:w-[45%] ">
          <div className=" flex items-center justify-around overflow-hidden pb-8 ">
            <AnimationMove customDelay={2} customX={75}>
              <div className="flex h-24 w-24 flex-col items-center rounded-3xl border-2 border-solid border-sky-200 p-8 shadow-xl shadow-gray-400/20 md:h-40 md:w-40">
                <IoLogoReact size={40} style={{ color: "#4db5ff" }} />
                <p className="mt-2 hidden md:block">React</p>
                <p className=" hidden font-medium text-gray-400  md:block">
                  1 year exp.
                </p>
              </div>
            </AnimationMove>{" "}
            <AnimationMove customDelay={3} customX={75}>
              <div className="flex h-24 w-24 flex-col items-center rounded-3xl border-2 border-solid border-sky-200 p-8 shadow-xl shadow-gray-400/20 md:h-40 md:w-40">
                <SiNextdotjs size={40} style={{ color: "#4db5ff" }} />
                <p className="mt-2 hidden md:block">Next.js</p>
                <p className="hidden font-medium text-gray-400  md:block">
                  1 year exp.
                </p>
              </div>
            </AnimationMove>
            <AnimationMove customDelay={4} customX={75}>
              <div className="flex h-24 w-24 flex-col items-center rounded-3xl border-2 border-solid border-sky-200 p-8 shadow-xl shadow-gray-400/20 md:h-40 md:w-40">
                <SiTailwindcss size={40} style={{ color: "#4db5ff" }} />
                <p className="mt-2 hidden md:block">Tailwindcss</p>
                <p className="hidden font-medium text-gray-400  md:block">
                  1 year exp.
                </p>
              </div>
            </AnimationMove>
          </div>
          <AnimationMove customDelay={5}>
            <p className="mb-5">
              I am a novice frontend developer with an interest in creating
              interactive and creative websites. You strive to expand your
              skills in HTML, CSS and JavaScript, as well as learn modern
              frameworks and libraries for developing web applications. Your
              goal is to become an experienced developer capable of creating
              amazing user interfaces for web projects.
            </p>
          </AnimationMove>
          <AnimationMove customDelay={5} customY={55}>
            <a
              href=""
              download="/app/asset/cv.docx"
              className=" btn btn-project relative flex pr-7 "
            >
              Download CV
              <IoDocumentText
                size={20}
                className="absolute right-1 top-[14px]"
              />
            </a>
          </AnimationMove>
        </div>
      </div>
      <Skills />
    </div>
  );
};
export default page;
