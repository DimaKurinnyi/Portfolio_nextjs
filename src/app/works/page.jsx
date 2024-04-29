"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimationMove } from "../Amimation/AnimationMove";
import { Category } from "../components/Category";
import { ErrorConnect } from "../components/ErrorConnect";
import { Loading } from "../components/Loading";
import Link from "next/link";

const page = () => {
  const [result, setResult] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState("All");
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
        setFiltered(result);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  
  return (
    <div className="container">
      <AnimationMove customY={75} customDelay={1}>
        <div className=" mt-36 text-center text-5xl font-bold">My Works</div>
      </AnimationMove>
      
      <div className="mt-14 text-center">
      <AnimationMove customY={75} customDelay={2}>
        <Category
          active={active}
          setActive={setActive}
          setFiltered={setFiltered}
          result={result}
        /></AnimationMove>
        {loading && <Loading />}
        {error && <ErrorConnect />}
        <div className="grid  grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-x-9 gap-y-9">
          {!error &&
            filtered.map((work, i) => (
              <AnimationMove key={work.id} customDelay={i / 3} customY={75}>
                <div
                  
                  className="   rounded-3xl border border-solid border-transparent  bg-gray-400/20 p-6 group shadow-2xl shadow-gray-900/1"
                >
                  <div className="overflow-hidden mb-5 h-[300px] rounded-3xl">
                  <Image
                    className=" group-hover:scale-110 w-full h-full   duration-300 ease-in-out"
                    src={work.image[0]}
                    alt="project_image"
                    width={500}
                    height={500}
                  ></Image></div>

                  <p className=" text-start text-lg font-medium">
                    {work.title}
                  </p>
                  <div className="mt-3 flex items-center  gap-4">
                    <a href={work.git} className=" btn btn-project">
                      Github
                    </a>
                    <Link href={`/works/${work.id}`} className="btn btn-project py-2 pl-4">
                      See more
                    </Link>
                  </div>
                </div>
              </AnimationMove>
            ))}
        </div>
      </div>
    </div>
  );
};

export default page;
