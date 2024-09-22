import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, Code } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  gitUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  link,
  gitUrl,
}) => {
  return (
    <div className="relative group border rounded-lg shadow bg-gray-800 border-gray-700 overflow-hidden">
      {/* Image Section */}
      <Link href={link || "#"}>
        <Image
          className="rounded-t-lg"
          src={image}
          alt={title}
          width={500}
          height={300}
          layout="responsive"
        />
      </Link>

      {/* Content Section */}
      <div className="p-5">
        <Link href={link || "#"}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-white mt-5">
          {description}
        </p>
      </div>

      {/* Hover Icons Section */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex space-x-6">
          {/* Eye Icon for project preview */}
          <Link href={link || "#"} target="_blank">
            <Eye className="w-8 h-8 text-white cursor-pointer" />
          </Link>

          {/* Code Icon for GitHub link */}
          <Link href={gitUrl || "#"} target="_blank">
            <Code className="w-8 h-8 text-white cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};
