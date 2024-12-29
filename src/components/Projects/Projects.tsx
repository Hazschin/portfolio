import { Code } from "@mui/icons-material";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ResumeProjectType } from "@/types/resumeType";

export default function Projects({
  projects,
}: {
  projects?: ResumeProjectType[];
}) {
  if (!projects) return <></>;

  return (
    <div>
      <div
        id="projects"
        className="flex items-center gap-3 text-2xl font-bold py-5"
      >
        <Code />
        Projects
      </div>
      <div className="flex flex-col gap-10">
        {projects.map((project, i) => {
          return (
            <ProjectCard
              title={project.name}
              skills={project.skills}
              description={project.description}
              codeLink={project.code}
              previewLink={project.url}
              projectImage={project.image}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
