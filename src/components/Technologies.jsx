import React from "react";
import { motion } from "framer-motion";
import HoverTech from "./HoverTech";

import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaGithub, FaNodeJs, FaJava, FaHtml5, FaCss3, FaBrain } from "react-icons/fa";
import { SiPython, SiJavascript, SiC } from "react-icons/si";
import { TbBrandCpp, TbSql, TbCpu } from "react-icons/tb";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Languages and Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {/* ===== Languages ===== */}
        {/* JavaScript */}
        <motion.div variants={iconVariants(2.4)} initial="initial" animate="animate" className="rounded-full flex items-center border-4 border-neutral-900 p-6">
          <a href="#hunting-game">
            <HoverTech name={"JavaScript"}>
              <SiJavascript className="text-yellow-400 text-7xl" />
            </HoverTech>
          </a>
        </motion.div>

        {/* Python */}
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-full flex items-center border-4 border-neutral-900 p-6">
          <a href="#projects">
            <HoverTech name={"Python"}>
              <SiPython className="text-yellow-500 text-7xl" />
            </HoverTech>
          </a>
        </motion.div>

        {/* Java */}
        <motion.div variants={iconVariants(2.2)} initial="initial" animate="animate" className="rounded-full flex items-center border-4 border-neutral-900 p-6">
          <a href="#encoding-decoding-project">
            <HoverTech name={"Java"}>
              <FaJava className="text-red-500 text-7xl" />
            </HoverTech>
          </a>
        </motion.div>

        {/* C++ */}
        <motion.div variants={iconVariants(2.7)} initial="initial" animate="animate" className="rounded-full flex items-center border-4 border-neutral-900 p-6 px-7">
          <a href="#projects">
            <HoverTech name={"C++"}>
              <TbBrandCpp className="text-blue-500 text-7xl" />
            </HoverTech>
          </a>
        </motion.div>

        {/* C */}
        <motion.div variants={iconVariants(2.7)} initial="initial" animate="animate" className="rounded-full flex items-center border-4 border-neutral-900 p-6 px-7">
          <a href="#projects">
            <HoverTech name={"C"}>
              <SiC className="text-blue-300 text-7xl" />
            </HoverTech>
          </a>
        </motion.div>

        {/* Assembly */}
        <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className="rounded-full flex items-center border-4 border-neutral-900 p-6">
          <a href="#projects">
            <HoverTech name={"Assembly"}>
              <TbCpu className="text-neutral-300 text-7xl" />
            </HoverTech>
          </a>
        </motion.div>

        {/* ===== Web ===== */}
        {/* HTML */}
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-full flex items-center border-4 border-neutral-900 p-6 px-7">
          <a href="#japan-webpage">
            <HoverTech name={"HTML"}>
              <FaHtml5 className="text-orange-500 text-7xl" />
            </HoverTech>
          </a>
        </motion.div>

        {/* CSS */}
        <motion.div variants={iconVariants(2.6)} initial="initial" animate="animate" className="rounded-full flex items-center border-4 border-neutral-900 p-6">
          <a href="#japan-webpage">
            <HoverTech name={"CSS"}>
              <FaCss3 className="text-blue-500 text-7xl" />
            </HoverTech>
          </a>
        </motion.div>

        {/* React */}
        <motion.div variants={iconVariants(2.3)} initial="initial" animate="animate" className="rounded-full flex items-center border-4 border-neutral-900 p-6">
          <a href="#reddit">
            <HoverTech name={"React"}>
              <RiReactjsLine className="rounded-full shadow-black text-cyan-500 text-7xl" />
            </HoverTech>
          </a>
        </motion.div>

        {/* Tailwind */}
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-full flex items-center border-4 border-neutral-900 p-6">
          <a href="#projects">
            <HoverTech name={"Tailwind"}>
              <RiTailwindCssFill className="text-cyan-300 text-7xl" />
            </HoverTech>
          </a>
        </motion.div>

        {/* NodeJS */}
        <motion.div variants={iconVariants(2.2)} initial="initial" animate="animate" className="rounded-full flex items-center border-4 border-neutral-900 p-6">
          <a href="#reddit">
            <HoverTech name={"NodeJS"}>
              <FaNodeJs className="text-green-500 text-7xl" />
            </HoverTech>
          </a>
        </motion.div>

        {/* ===== Data & ML ===== */}
        {/* SQL */}
        <motion.div variants={iconVariants(2.3)} initial="initial" animate="animate" className="rounded-full flex items-center border-4 border-neutral-900 p-6">
          <a href="#reddit">
            <HoverTech name={"SQL"}>
              <TbSql className="text-purple-400 text-7xl" />
            </HoverTech>
          </a>
        </motion.div>

        {/* Machine Learning */}
        <motion.div variants={iconVariants(2.4)} initial="initial" animate="animate" className="rounded-full flex items-center border-4 border-neutral-900 p-6">
          <a href="#stress-dueling">
            <HoverTech name={"Machine Learning"}>
              <FaBrain className="text-pink-400 text-7xl" />
            </HoverTech>
          </a>
        </motion.div>

        {/* ===== Tools ===== */}
        {/* GitHub */}
        <motion.div variants={iconVariants(2.1)} initial="initial" animate="animate" className="rounded-full flex items-center border-4 border-neutral-900 p-6">
          <a href="https://github.com/Jyeung221060544" target="_blank">
            <HoverTech name={"GitHub"} invert={true}>
              <FaGithub className="text-7xl" />
            </HoverTech>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
