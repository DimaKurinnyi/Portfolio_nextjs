import Image from "next/image";

export const Loading = () => {
  return (
    <div className="flex h-screen justify-center ">
      {/* <svg className=" animate-spin h-40 w-40  text-blue-400 border-t-2 border-solid rounded-full  "> */}

      {/* </svg> */}
      <Image
        className="h-80 w-80 animate-spin"
        width={500}
        height={500}
        src="/loading.png"
        alt="Loading icon"
      ></Image>
    </div>
  );
};
