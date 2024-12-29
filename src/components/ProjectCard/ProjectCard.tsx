import { projectCard } from "@/types/components";
import Breadcrumb from "../BreadCrumb/Breadcrumb";
import Button from "../Button/Button";
import "./projectcard.css";
import { GitHub, Link } from "@mui/icons-material";

export default function ProjectCard({
  title,
  skills,
  description,
  codeLink,
  previewLink,
  projectImage,
}: projectCard) {
  return (
    <div className="card">
      <div className="transparence" />
      <div className="image">
        <img src={projectImage} />
      </div>
      <div className="info pl-3.5">
        <span className="text-2xl font-bold">{title}</span>
        <div className="breadcrumbs mb-3">
          {skills?.map((skill, i) => {
            return <Breadcrumb label={skill} iconKeyword={skill} key={i} />;
          })}
        </div>
        <div className="text-base text-base font-light mb-3">{description}</div>
        <div className="buttons">
          {codeLink ? (
            <Button
              label="Code"
              iconKeyword="github"
              icon={<GitHub />}
              redirect={codeLink}
            />
          ) : (
            ""
          )}
          {previewLink ? (
            <Button
              label="Preview"
              iconKeyword="preview"
              icon={<Link />}
              redirect={previewLink}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
