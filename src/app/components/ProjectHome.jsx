"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimationMove } from "../Amimation/AnimationMove";

export const ProjectHome = () => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://647ce039c0bae2880ad14a6f.mockapi.io/test",
        );
        if (!response.ok) throw new Error("Response was not successful");
        const result = await response.json();
        setResult(result);
        
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  
  

  return (
    <div className="container mb-28 overflow-auto ">
      <div className=" mb-16 mt-8 flex items-center justify-between ">
        <AnimationMove customX={-75}>
          <h1 className="text-4xl font-bold">Lates Project</h1>
        </AnimationMove>
        <AnimationMove customX={75}>
          <Link
            href="/works"
            className="text-xl font-semibold text-gray-400 hover:text-black"
          >
            See All
          </Link>
        </AnimationMove>
      </div>
      <div className="grid  grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-x-6 gap-y-6">
        {result.slice(0, 3).map((project, i) => (
          <AnimationMove key={project.id} customDelay={i} customY={75}>
          <div
            key={project.id}
            className=" work   relative overflow-hidden rounded-3xl duration-300 ease-in-out"
          >
            <Image
              className="h-[300px]  rounded-3xl "
              src={project.image[0]}
              alt="project_image"
              width={500}
              height={500}
            ></Image>
            <div className=" work-bg">
              <div className="mb-6 text-2xl font-medium">{project.title}</div>
              <div className="flex items-center justify-center gap-4">
                <a href={project.git} className=" btn btn-project">
                  Github
                </a>
                <a href="" className="btn btn-project py-2 pl-4">
                  Demo
                </a>
              </div>
            </div>
          </div>
          </AnimationMove>
        ))}
      </div>
    </div>
  );
};
