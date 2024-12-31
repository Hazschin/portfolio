"use client";

import AboutMe from "@/components/AboutMe/AboutMe";
import Experience from "@/components/Experience/Experience";
import Menu from "@/components/Menu/Menu";
import Projects from "@/components/Projects/Projects";
import Summary from "@/components/Summary/Summary";
import { ResumeType } from "@/types/resumeType";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    const fetchResume = async () => {
      const response = await fetch("/resume/resume.json");
      const jsonResume: ResumeType = await response.json();
      setResume(jsonResume);
      console.log(jsonResume);
    };
    fetchResume();
  }, []);

  const [resume, setResume] = useState<ResumeType | undefined>();

  const hasProjects: boolean =
    resume?.projects && resume.projects.length > 0 ? true : false;

  const hasExperience: boolean =
    resume?.work && resume.work.length > 0 ? true : false;

  const hasAboutMe: boolean = resume?.basics.aboutMe ? true : false;

  return (
    <div className="flex justify-center pb-10">
      <div className="px-8 max-w-screen-lg">
        <Menu
          hasProjects={hasProjects}
          hasExperience={hasExperience}
          hasAboutMe={hasAboutMe}
        />
        <Summary basics={resume?.basics} skills={resume?.skills} />
        <Projects projects={resume?.projects} />
        <Experience works={resume?.work} />
        <AboutMe description={resume?.basics.aboutMe} />
        <div className="flex justify-center pt-10 text-sm font-bold text-white-70">
          {resume?.basics.copyright}
        </div>
      </div>
    </div>
  );
}
