"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "The code for this website which I made using Next.js and Tailwind CSS.",
    image: "/logo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adammat2004",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Tradies",
    description: "Full stack application where tradesmen can advertise their services. I made it using next.js, tailwind css, prisma, MongoDB, NextAuth for authentication and I used stripe for payments.",
    image: "/logo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adammat2004",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Netflix Clone",
    description: "Full stack application made using react, node.js, express and mongoDB which mimics Netflix's website.",
    image: "/netflixClone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adammat2004/netflix-clone",
    previewUrl: "https://mern-netflix-clone-jttk.onrender.com/",
  },
  {
    id: 4,
    title: "Python Chat App",
    description: "A chat application made using python and socket programming.",
    image: "/chat_app.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adammat2004/python-chat-app",
    previewUrl: "https://python-chat-app-1uos.onrender.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
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
      {/*<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
      </div>*/}
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
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
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;