"use client";

import { AnimationMove } from "@/app/Amimation/AnimationMove";
import { ErrorConnect } from "@/app/components/ErrorConnect";
import { Loading } from "@/app/components/Loading";
import { Project } from "@/app/components/Project";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const params = useParams();
  const id = params.id;
  const [result, setResult] = useState([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://647ce039c0bae2880ad14a6f.mockapi.io/test/${id}`,
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
  console.log(result);
  return (
    <div className="container">
      <AnimationMove customDelay={1}>
        <div className="mt-36 text-center text-3xl font-bold md:text-5xl">
          {result.title}
        </div>
      </AnimationMove>
      <div className="mt-20">
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorConnect />
        ) : (
          <Project result={result} />
        )}
      </div>
    </div>
  );
};

export default page;
