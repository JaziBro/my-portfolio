"use client"
import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase } from "react-icons/fa"
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiShadcnui, SiFigma } from "react-icons/si"

export const Skills = () => {
  const skills = [
    { icon: <FaReact size={50} />, name: "React" },
    { icon: <SiNextdotjs size={50} />, name: "Next.js" },
    { icon: <SiJavascript size={50} />, name: "JavaScript" },
    { icon: <SiTypescript size={50} />, name: "TypeScript" },
    { icon: <FaNodeJs size={50} />, name: "Node.js" },
    { icon: <FaHtml5 size={50} />, name: "HTML5" },
    { icon: <FaCss3Alt size={50} />, name: "CSS3" },
    { icon: <SiTailwindcss size={50} />, name: "Tailwind CSS" },
    { icon: <FaDatabase size={50} />, name: "SQL" },
    { icon: <FaGitAlt size={50} />, name: "Git" },
    { icon: <SiFigma size={50} />, name: "Figma" },
    { icon: <SiShadcnui size={50} />, name: "Shadcn/ui" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const iconAnimation = {
    hover: {
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <div className="w-full py-20 text-white" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-primary hover:bg-primary/90 transition-colors duration-300"
              variants={item}
              whileHover="hover"
            >
              <motion.div className="text-[#A78BFA] mb-3" variants={iconAnimation}>
                {skill.icon}
              </motion.div>
              <p className="text-center text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
