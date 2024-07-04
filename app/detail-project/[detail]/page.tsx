"use client";
import { ProjectCardProps } from "@/components/ProjectCard";
import { Projects } from "@/constants";
import { useParams } from "next/navigation";

const Page = () => {
  const { detail } = useParams<{ detail: string }>();

  // Assuming detail is an ID or slug used to find the project
  const project = Projects.find((proj) => proj.id === parseInt(detail, 10));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div
      style={{ backgroundImage: "url('/mountains.jpg')" }}
      className="w-screen h-full flex items-center justify-center md:h-screen bg-center bg-cover"
    >
      <div className="bg-white p-5 rounded shadow-lg">
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <p className="mt-2">{project.text}</p>
        {project.src && <img src={project.src} alt={project.title} className="mt-4 max-w-full h-auto" />}
      </div>
    </div>
  );
};

export default Page;
