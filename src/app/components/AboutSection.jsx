"use client"
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>React</li>
        <li>Next.js</li>
        <li>JavaScript</li>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>Web Developer at XYZ Company</li>
        <li>Intern at ABC Corp</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>DSC</li>
        <li>RJU</li>
      </ul>
    )
  },
 
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [ isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 space-y-6 md:space-y-0 md:space-x-6 rounded-lg shadow-lg">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQky4IPJQ8ZDBY_4WRK4OG5nbU4yn1WOMjq0w&s" 
          alt="About Me" 
          className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Right Side: Text */}
      <div className="w-full md:w-1/2 text-white">
        <h2 className="text-3xl font-bold mb-4 animate-bounce">About Me</h2>
        <p className="text-lg mb-4">
          I am a passionate web developer with a knack for creating dynamic and responsive web applications. 
          My journey in web development has equipped me with a diverse skill set, including proficiency in 
          JavaScript, React, and Tailwind CSS.
        </p>
        <p className="text-lg">
          I love turning ideas into reality and continuously strive to improve my skills and knowledge in the 
          ever-evolving tech landscape. Let's build something amazing together!
        </p>
        <div className='flex flex-row justify-start mt-8'>
          <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"} aria-selected={tab === "skills"}> {""}Skills{""} </TabButton>
          <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"} aria-selected={tab === "education"}>{""}Education{""}</TabButton>
          <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"} aria-selected={tab === "experience"}>{""}Experience{""}</TabButton>
        </div>
        <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
      </div>
    </div>
  );
}

export default AboutSection;