import Image from "next/image";
import { AnimationMove } from "../Amimation/AnimationMove";
import introImg from "../asset/intro.jpeg";
import { Btn } from "./Btn";

export const Hero = () => {
  return (
    <div className="container mt-32  flex md:mt-0 md:h-screen md:items-center md:justify-between ">
      <div className="">
        <AnimationMove customX={-75}>
          <h1 className="inline-block bg-gradient-to-r  from-indigo-500 to-sky-500 bg-clip-text pb-3 text-7xl  font-bold text-transparent   ">
            Dmytro Kurinnyi
          </h1>
        </AnimationMove>
        <AnimationMove customX={-75} customDelay={1}>
          <h1 className="pb-3 text-7xl font-bold">Frontend</h1>
        </AnimationMove>
        <AnimationMove customX={-75} customDelay={2}>
        <h1 className="pb-4 text-7xl font-bold">Developer</h1></AnimationMove>
        <AnimationMove customX={-75} customDelay={3}>
        <p className=" pb-4  font-medium text-gray-400">
          I am a novice frontend developer with an interest in
          <br /> creating interactive and creative websites.
        </p></AnimationMove>
        <AnimationMove customY={75} customDelay={4}>
        <Btn
          title={"Hire Me!"}
          size={42}
          className={
            "group flex w-fit items-center rounded-3xl border border-solid border-black border-transparent bg-[#8edafb] pl-4 text-xl font-semibold duration-300 ease-in-out"
          }
        /></AnimationMove>
      </div>
      <div className=" hidden md:block">
      <AnimationMove customX={75} customDelay={2}>
        <Image
          className="custom_border overflow-hidden"
          src={introImg}
          alt="photo"
          width={500}
          height={500}
        ></Image></AnimationMove>
      </div>
    </div>
  );
};
