'use client'
;

import { AnimationMove } from "../Amimation/AnimationMove";

const Skills = () => {
  const skillsData = [
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
    'JavaScript',
  ];
  return (
    <>
      <AnimationMove customDelay={1} customY={75}>
        <h1 className="text-center  text-3xl mt-12">Skills</h1>
      </AnimationMove>
      <div className="mt-16 mb-16 text-center">
        <div className=" md:px-12 px-1   ">
          <ul className="flex mx-auto flex-wrap justify-center gap-2 md:text-lg max-w-3xl text-[10px]">
            {skillsData.map((skill, index) => (
              <AnimationMove key={index} customDelay={index} customY={75}>
                <li className="border-2 rounded-3xl px-3 py-2 border-solid border-[#4db5ff]">
                  {skill}
                </li>
              </AnimationMove>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;