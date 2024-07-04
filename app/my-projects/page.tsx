import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div
      style={{ backgroundImage: "url('/mountains.jpg')" }}
      className="w-screen h-full flex items-center justify-center md:h-screen bg-center bg-cover "
    >
      <div className="flex flex-col md:grid grid-cols-2  gap-5 ">
        {Projects.map((project, index) => (
          <div key={index}>
            <ProjectCard
              id={index}
              title={project.title}
              text={project.text}
              image={project.src}
            /> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
