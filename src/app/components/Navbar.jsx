"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { AnimationMove } from "../Amimation/AnimationMove";
import { Btn } from "./Btn";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [blur, setBlur] = useState(0);
  const [bg, setBg] = useState("");
  const background = "rgba(0,0,0,0.1)";

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 50) {
        setBlur(64);
        setBg(background);
      } else {
        setBlur(0);
        setBg("");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <AnimationMove>
      <nav
        style={{
          backgroundColor: `${bg}`,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
        }}
        className="fixed left-0 top-0  z-50 w-full duration-300 ease-in"
      >
        <div className="m-auto flex max-w-[1300px] items-center justify-between p-4 ">
          <h1 className=" z-10 text-3xl font-bold">
            <Link href="/">Dmytrij </Link>
          </h1>
          <ul className="hidden sm:flex sm:items-center">
            <li className="text-l nav relative m-4  font-medium">
              <Link href="/">Home</Link>
            </li>
            <li className="text-l nav relative m-4 font-medium">
              <Link href="/works">Works</Link>
            </li>
            <li className="text-l nav relative m-4 font-medium">
              <Link href="/about">About</Link>
            </li>
            <li className="text-l relative m-4 ">
              <Btn
                title={"Contact"}
                size={34}
                className={
                  "text-l group flex w-fit items-center rounded-3xl border border-solid border-black border-transparent bg-gray-200 pl-4 font-medium duration-300 ease-in-out"
                }
              />
            </li>
          </ul>

          <div onClick={handleNav} className="z-10 block sm:hidden">
            {nav ? (
              <FaTimes size={20} style={{ cursor: "pointer" }} />
            ) : (
              <FaBars size={20} style={{ cursor: "pointer" }} />
            )}
          </div>
          {/* Mobile menu  */}
          <div
            className={
              nav
                ? "absolute bottom-0 left-0 right-0 top-0 flex h-screen w-full items-center justify-center bg-white/80 text-center duration-300 ease-in sm:hidden"
                : "absolute bottom-0 left-[-100%] right-0 top-0 flex h-screen w-full items-center justify-center bg-white text-center duration-300 ease-in sm:hidden"
            }
          >
            <ul onClick={handleNav}>
              <li className="p-4 text-4xl ">
                <Link href="/">Home</Link>
              </li>
              <li className="p-4 text-4xl ">
                <Link href="/project">Project</Link>
              </li>
              <li className="p-4 text-4xl ">
                <Link href="/about">About</Link>
              </li>
              <li className="p-4 text-4xl ">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </AnimationMove>
  );
};
