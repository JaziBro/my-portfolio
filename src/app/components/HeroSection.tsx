"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import DownloadButton from "./DownloadButton";

const HeroSection: React.FC = () => {
  return (
    <section className="lg:py-16 bg-background">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            Hello, I&apos;m{" "}
            <br />
            <TypeAnimation
              sequence={[
                "Jazil",
                1000,
                "Full Stack Web Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-textSecondary text-base sm:text-lg mb-6 lg:text-xl">
            Building dynamic and responsive websites with a focus on performance and user experience.
          </p>
        

          <Link
            href="/#contact"
            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary to-secondary hover:scale-110 text-white"
          >
            Hire Me
          </Link>
          <Link
            href="/"
            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary to-secondary text-white mt-3 hover:scale-110"
          >
          <span className="block bg-background rounded-full px-5 py-2">
            <DownloadButton/>
          </span>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-gradient-to-r bg-green-500 w-[450px] h-[450px] lg:w-[450px] lg:h-[450px] relative ">
            <Image
              src="/images/portfolio-pic.png"
              alt="hero image"
              className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full w-full h-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
