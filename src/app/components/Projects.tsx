"use client";
import React, { useState, useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio showcasing my projects and skills. Designed to highlight achievements and provide easy access to my work",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JaziBro/my-portfolio.git",
    link: "/",
  },
  {
    id: 2,
    title: "TodoBliss - Todo List Website",
    description: "A sleek and intuitive todo list website to manage tasks efficiently. Stay organized and track your productivity effortlessly",
    image: "/images/projects/todobliss.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JaziBro/TodoBliss.git",
    link: "https://todo-bliss.vercel.app/"
  },
  {
    id: 3,
    title: "Saadi Perfumes - An E-commerce Website",
    description: "An elegant e-commerce platform for purchasing perfumes. Explore a variety of fragrances and enjoy a seamless shopping experience",
    image: "/images/projects/perfume-store.jpg",
    tag: ["All","Mobile"],
    gitUrl: "https://github.com/JaziBro/Saadi-Perfumes.git",
    link:"https://perfume-store-tau.vercel.app/"
  },
  {
    id: 4,
    title: "BrainBuster - A Quiz Website",
    description: "A dynamic quiz website with multiple categories to challenge your knowledge. Test your skills with fun and engaging quizzes",
    image: "/images/projects/brainbuster.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JaziBro/BrainBuster.git",
    link: "https://brain-buster-ebon.vercel.app/"
  },
  {
    id: 5,
    title: "Command Line Calculator",
    description: "A command line tool for performing basic arithmetic operations. Lightweight, fast, and ideal for quick calculations",
    image: "/images/projects/calculator.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JaziBro/command-line-calculator.git",
    link: "https://github.com/JaziBro/command-line-calculator.git",
  },
  {
    id: 6,
    title: "Command Line Adventure Game",
    description: "An interactive text-based adventure game in the command line. Solve puzzles and explore different story paths through simple commands",
    image: "/images/projects/adventure-game.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JaziBro/command-line-adventure-game.git",
    link: "https://github.com/JaziBro/command-line-adventure-game.git",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              gitUrl={project.gitUrl} 
              link={project.link}            
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
