import { Carousel } from "./Carousel";

export const Project = ({ result }) => {
  return (
    <div className="">
      <Carousel data={result.image} />

      <div className=" ">
        <div className=" mb-5 flex flex-col items-center gap-5 md:flex-row md:items-baseline">
          <h1 className="text-2xl font-semibold ">Technologies:</h1>
          <div className=" flex gap-3 ">
            {result.Technologies.map((technique, i) => (
              <p key={i} className=" text-xl font-semibold text-gray-600">
                {technique}
              </p>
            ))}
          </div>
        </div>
        <h1 className="mb-5 text-2xl font-semibold">Description:</h1>
        <p className=" text-sm font-medium md:text-lg">{result.description}</p>
        <div className=" mt-7 flex items-center justify-center gap-5 md:justify-end ">
          <a href={result.git} className=" btn btn-project">
            Github
          </a>
          <a href="" className="btn btn-project">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};
