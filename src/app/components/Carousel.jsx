"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Carousel = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  ;
  return (
    <div className="relative mb-28 flex items-center justify-center ">
      <FaArrowRight
        className="absolute bottom-[-60px] right-[20%] z-10 cursor-pointer select-none text-5xl text-black md:right-[40%]"
        onClick={nextSlide}
      />
      <FaArrowLeft
        className="absolute bottom-[-60px] left-[20%] z-10 cursor-pointer select-none text-5xl text-black md:left-[40%]"
        onClick={prevSlide}
      />
      {data.map((image, index) => (
        <div
          kay={index}
          className={
            index === current
              ? " scale-100 opacity-100 duration-300 ease-in-out"
              : " scale-90 opacity-0 duration-300"
          }
        >
          {index === current && (
            <Image
              src={image}
              alt="project_image"
              width={500}
              height={500}
              className=" block max-h-[500px] w-auto rounded-3xl md:h-[500px]"
            />
          )}
        </div>
      ))}
    </div>
  );
};
