import Link from "next/link";
import { AnimationMove } from "../Amimation/AnimationMove";
import { Btn } from "./Btn";

export const Footer = () => {
  const nav = [
    { title: "Home", link: "" },
    { title: "Works", link: "works" },
    { title: "About", link: "about" },
    { title: "Contact", link: "contact" },
  ];
  const socialLinks = [
    { title: "Linkedin", link: "" },
    { title: "Facebook", link: "" },
    { title: "Github", link: "" },
    { title: "Telegram", link: "" },
  ];
  return (
    <div className="border-t border-solid border-gray-200 pt-14 ">
      <div className="container flex justify-between">
        <div className="">
          <div className="mb-9 flex gap-16">
            <div className="flex flex-col gap-4">
              <AnimationMove customY={75}>
                <h1 className=" text-lg font-bold">Navigation</h1>
              </AnimationMove>
              {nav.map((item, i) => (
                <AnimationMove customX={-75} customDelay={i + 2}>
                  <Link key={i}
                    className="font-semibold text-gray-400 hover:text-black"
                    href={`/${item.link}`}
                  >
                    {item.title}
                  </Link>
                </AnimationMove>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <AnimationMove customY={75}>
                <h1 className=" text-lg font-bold">Social Media</h1>
              </AnimationMove>
              {socialLinks.map((item, i) => (
                <AnimationMove customX={-75} customDelay={i + 2}>
                  <a key={i}
                    className="font-semibold text-gray-400 hover:text-black"
                    href={item.link}
                  >
                    {item.title}
                  </a>
                </AnimationMove>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <AnimationMove customY={75}>
              <h1 className="text-lg font-bold">Information</h1>
            </AnimationMove>
            <AnimationMove customX={-75} customDelay={2}>
              <a
                href="mailto:dimakurinnoy8@gmail.com"
                className=" font-semibold text-gray-400"
                target="_blank"
                rel="noreferrer"
              >
                dimakurinnoy8@gmail.com
              </a>
            </AnimationMove>
            <AnimationMove customX={-75} customDelay={3}>
              <p className="font-semibold text-gray-400">Wroclaw,Poland</p>
            </AnimationMove>
            <AnimationMove customX={-75} customDelay={4}>
              <a
                href="tel:+48575870237"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-gray-400"
              >
                +48575870237
              </a>
            </AnimationMove>
          </div>
        </div>

        <div className=" hidden flex-col items-center justify-around md:flex  ">
          <AnimationMove customX={75} customDelay={2}>
            <h1 className="  text-[86px] font-bold leading-tight ">
              Be Creative,
              <br />
              Be Solution
            </h1>
          </AnimationMove>
          <AnimationMove customX={75} customDelay={2}>
            <Btn
              size={42}
              className={
                "group flex w-fit items-center rounded-3xl border border-solid border-black border-transparent bg-[#8edafb] pl-4 text-xl font-semibold duration-300 ease-in-out"
              }
              title={"Contact Me"}
            />
          </AnimationMove>
        </div>
      </div>
    </div>
  );
};
