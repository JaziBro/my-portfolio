"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div>
        <h3 className="text-2xl font-semibold mb-2">Skills</h3>
        <ul className="list-disc pl-5">
          <li>FastAPI</li>
          <li>PostgreSQL</li>
          <li>Tailwind CSS</li>
          <li>TypeScript</li>
          <li>Next.Js</li>
          <li>React</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <h3 className="text-2xl font-semibold mb-2">Education</h3>
        <ul className="list-disc pl-5">
          <li>Fullstack Academy of Code</li>
          <li>University of California, Santa Cruz</li>
        </ul>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const  [, startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const selectedTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="text-grayLight" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="md:order-2 flex justify-center">
          <Image
            src="/images/about-img.webp"
            alt="about-image"
            width={500}
            height={700}
            className="rounded-lg object-cover h-full"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full md:order-1">
          <h2 className="text-4xl font-bold text-grayLight mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer passionate about creating
            interactive and responsive web applications. Skilled in TypeScript,
            React, Next.js, TailwindCSS, PostgreSQL and FastAPI I focus on
            delivering seamless user experiences through clean, efficient code.
            I am a quick learner, always eager to enhance my knowledge and stay
            current with new technologies. I enjoy tackling complex challenges
            and continuously refining my craft to build innovative solutions.
          </p>
          <div className="flex flex-row justify-start mt-8 space-x-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {selectedTab ? selectedTab.content : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
