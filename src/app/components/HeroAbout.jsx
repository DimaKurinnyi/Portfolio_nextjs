import { FaFacebookSquare, FaTelegram } from "react-icons/fa";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { AnimationMove } from "../Amimation/AnimationMove";

export const HeroAbout = () => {
  return (
    <div className=" mb-28">
      <div className="container">
        <AnimationMove customY={75}>
        <h1 className="  mx-auto mb-11 max-w-[670px] items-center text-center text-2xl font-bold md:text-4xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
          ratione!
        </h1></AnimationMove>
        <AnimationMove customY={75} customDelay={2}>
        <p className=" pb-4 font-semibold text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis
          magni quas odio error doloribus, accusantium iusto possimus quos?
          Obcaecati, facilis dolorem recusandae ad exercitationem harum modi,
          laborum deserunt odit officia, eos ab? Error dicta quibusdam nostrum
          excepturi in quae!
        </p></AnimationMove>
        <AnimationMove customY={75} customDelay={2}>
        <p className=" pb-4  font-semibold text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis
          magni quas odio error doloribus, accusantium iusto possimus quos?
          Obcaecati, facilis dolorem recusandae ad exercitationem harum modi,
          laborum deserunt odit officia, eos ab? Error dicta quibusdam nostrum
          excepturi in quae!
        </p></AnimationMove>
        <AnimationMove customY={75} customDelay={2}>
        <p className=" pb-4  font-semibold text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis
          magni quas odio error doloribus, accusantium iusto possimus quos?
          Obcaecati, facilis dolorem recusandae ad exercitationem harum modi,
          laboru m deserunt odit officia, eos ab? Error dicta quibusdam nostrum
          excepturi in quae!
        </p></AnimationMove>
      </div>
      <AnimationMove customY={75} customDelay={2}>
      <div className=" flex items-center md:justify-between justify-center ">
        <div className="custom_border_left hidden h-[200px] w-[200px] bg-indigo-500 md:block "></div>
        <div className="text-center ">
          <p className=" mb-3 text-sm font-semibold">Follow me on:</p>
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://github.com/Xdimax1488"
              className="duration-300 hover:scale-125"
              target="_blank"
              rel="noreferrer"
            >
              <GrGithub
                size={45}
                style={{
                  color: "#000",
                  padding: "10px",
                  backgroundColor: "rgb(222 223 225 / 80%)",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              />
            </a>
            <a
              href="https://github.com/Xdimax1488"
              className="duration-300 hover:scale-125"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare
                size={45}
                style={{
                  color: "#000",
                  padding: "10px",
                  backgroundColor: "rgb(222 223 225 / 80%)",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              />
            </a>
            <a
              href="https://github.com/Xdimax1488"
              className="duration-300 hover:scale-125"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegram
                size={45}
                style={{
                  color: "#000",
                  padding: "10px",
                  backgroundColor: "rgb(222 223 225 / 80%)",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              />
            </a>
            <a
              href="https://github.com/Xdimax1488"
              className="duration-300 hover:scale-125"
              target="_blank"
              rel="noreferrer"
            >
              <GrLinkedin
                size={45}
                style={{
                  color: "#000",
                  padding: "10px",
                  backgroundColor: "rgb(222 223 225 / 80%)",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              />
            </a>
          </div>
        </div>
        <div className="custom_border_right hidden h-[200px] w-[200px] bg-sky-500 md:block"></div>
      </div></AnimationMove>
    </div>
  );
};
