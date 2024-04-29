"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export const Category = ({ setActive, setFiltered, result, active }) => {
  useEffect(() => {
    if (active === "All") {
      setFiltered(result);
      return;
    }
    const filtered = result.filter((res) => res.category.includes(active));
    setFiltered(filtered);
  }, [active]);

  const category = ["All", "React app", "Single page", "Full stack"];
  return (
    <div className=" mb-8 flex items-center justify-center md:mb-32 ">
      <div className=" max-w-fit rounded-full bg-gray-400/20 md:py-2 py-1 md:px-4 px-1 shadow-2xl shadow-gray-900/1 ">
        {category.map((category, i) => (
          <button
            key={i}
            onClick={() => setActive(`${category}`)}
            className={`${active === category ? "" : "hover:scale-110 "} relative    p-2 text-xs font-semibold duration-300 ease-in-out md:px-4 md:text-lg   `}
          >
            {active === category && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0  bg-[#8edafb] "
                transition={{ duration: .5 }}
                style={{borderRadius:'9999px'}}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
