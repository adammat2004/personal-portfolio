"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["JavaScript", "Python", "C", "C++", "TypeScript", "Rust", "Java", "SQL", "Haskell"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Express", "NestJS",  "Prisma", "Jest", "React Native", "Expo"],
  },
  {
    title: "DevOps",
    skills: ["Git", "Docker", "Stripe", "Shell Scripting"],
  },
  {
    title: "Machine Learning",
    skills: ["Scikit-learn", "OpenAi Embeddings"],
  },
  {
    title: "Data Science",
    skills: ["Pandas", "Numpy", "Matplotlib"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  }
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {SKILL_CATEGORIES.map((category, index) => (
          <div
            key={index}
            className="bg-[#181818] border border-[#33353F] rounded-lg p-6 hover:border-primary-500 transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-4 border-b border-[#33353F] pb-2">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="text-[#ADB7BE] hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Dublin City University</li>
        <li>Program: Computer Science</li>
        <li>Year of graduation: 2027</li>
      </ul>
    ),
  },
  {/*{
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },*/}
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="container mx-auto px-4 py-8 sm:py-16 xl:px-16">
        <div className="max-w-6xl mx-auto text-left flex flex-col">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg mb-8">
            I’m a third-year Computer Science student at Dublin City University 
            and a product-focused software engineer with a strong interest in building real-world systems.
            I design and build full-stack applications end-to-end — from mobile frontends in React Native
            to scalable backend APIs using NestJS, Prisma and MongoDB.
            I’m particularly interested in building platforms that solve real operational problems, especially in marketplaces and SaaS products.
          </p>
          <div className="flex flex-row justify-start mb-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/*<TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>*/}
          </div>
          <div>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;