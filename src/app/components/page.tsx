import AboutMe from "@/components/AboutMe/AboutMe";
import Experience from "@/components/Experience/Experience";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import Menu from "@/components/Menu/Menu";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Summary from "@/components/Summary/Summary";

export default function Components(){
    return <div className="flex flex-col gap-10 px-10">
    <div>
        <ProjectCard />
    </div>
    
    <div>
        <ExperienceCard />
    </div>
    
    <div>
        <AboutMe />
    </div>
    <div>
        <Summary />
    </div>
    <div>
        <Menu />
    </div>
    <div>
        <Experience />
    </div>
    </div>
}