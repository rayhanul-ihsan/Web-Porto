import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div
      style={{ backgroundImage: "url('/mountains.jpg')" }}
      className="w-screen flex items-center justify-center h-screen bg-center bg-cover "
    >
        <div className="flex flex-col justify-center items-center md:grid grid-cols-2 md:m-40 max-w-[100%] max-h-[100%] gap-5 mt-52 overflow-y-scroll md:overflow-y-visible">
          {Projects.map((project, index) => (
            <div key={index}>
              <ProjectCard
                title={project.title}
                text={project.text}
                image={project.src}
              />
            </div>
          ))}
        </div>
        {/* <div className="flex flex-col justify-center items-center w-full h-full md:grid grid-cols-2 md:m-40 max-w-[100%] max-h-[100%] gap-5 mt-52 overflow-y-scroll md:overflow-y-visible">
          {Projects.map((project, index) => (
            <div key={index}>
              <ProjectCard
                title={project.title}
                text={project.text}
                image={project.src}
              />
            </div>
          ))}
        </div> */}
    </div>
  );
};

export default page;
