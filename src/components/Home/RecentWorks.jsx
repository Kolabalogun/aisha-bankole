import { BsArrowRight } from "react-icons/bs";

import { useGlobalContext } from "../../functions/context";

const RecentWorks = () => {
  const { projectsFromDB, pageContent } = useGlobalContext();

  return (
    <div className="bg-[#010101] text-white " id="portfolio">
      <div className="max-w-[1240px] mx-auto py-16 md:py-40 px-5 sm:px-10 xl:px-0">
        <h1 className="font-bold text-3xl md:text-[50px] md:leading-[52px] leading-[36px] ">
          Recent Works
        </h1>

        <div className="wrapper gap-7 md:gap-3 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-16 place-content-center">
            {projectsFromDB?.map((project, idx) => (
              <a key={idx} href={`/project/${project?.id}`}>
                <div className="projectlink space-y-3 w-full h-[400px] hover:scale-95 transition-transform duration-300 ease-in-out">
                  <img
                    src={project?.imgUrl}
                    alt="quiz project"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-3">
                  <a
                    to={`/project/${project?.id}`}
                    className="text-lg font-medium projectlink cursor-pointer py-2"
                  >
                    {project?.projectName}
                  </a>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex cursor-pointer mt-6">
          <a
            href={
              pageContent?.recentWorkLink
                ? pageContent?.recentWorkLink
                : "https://www.youtube.com/@adventourswithaisha"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fff] flex self-start items-center gap-3 my-6  text-[#010101] p-3 font-semibold uppercase"
          >
            see More
            <div className="text-2xl">
              <BsArrowRight />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
