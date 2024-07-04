"use client";
import React from "react";
import Link from 'next/link';

export interface ProjectCardProps {
  id: number | string;
  image: string;
  title: string;
  text: string;
}

const ProjectCard = ({ id, image, title, text }: ProjectCardProps) => {
  console.log("card:",id)
  return (
    <Link href={`/detail-project/${id}`}>
      <div className="w-[450px] h-[280px] perspective-1000">
        <div className="relative w-full h-full group">
          <div
            className="absolute w-full h-full bg-black bg-cover bg-center bg-opacity-50 text-white rounded-lg p-4 flex flex-col justify-center items-center gap-5 py-3 group-hover:scale-110 transition-transform duration-500 ease-in-out"
            style={{ backgroundImage: `url(${image})` }}
          >
            {/* <h1 className="text-2xl font-semibold ">{title}</h1>
            <p className="text-gray-200 text-[14px] text-justify">{text}</p> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
