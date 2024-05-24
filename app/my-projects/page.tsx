import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div
      style={{ backgroundImage: "url('/mountains.jpg')" }}
      className="w-screen  flex item-center justify-center h-screen overflow-y:scroll bg-center bg-cover"
    >
        <div className="flex flex-col justify-center items-center  md:grid grid-cols-2 md:m-40 max-w-[100%] max-h-[100%] gap-5">
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
        {/* <div className="w-full h-[100px]">
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
          <h1 className="text-white">dsadsafdsadsa</h1>
        </div> */}
    </div>
  );
};

export default page;
