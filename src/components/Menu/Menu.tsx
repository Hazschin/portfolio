import { menu } from "@/types/components";
import "./menu.css";

export default function Menu({
  hasProjects = true,
  hasExperience = true,
  hasAboutMe = true,
}: menu) {
  return (
    <div className="menu">
      <div
        className="flex gap-5 text-base py-2 px-5 rounded-full"
        style={{ width: "fit-content", margin: "0 auto" }}
      >
        {hasProjects ? <a href="#projects">Projects</a> : <></>}
        {hasExperience ? <a href="#experience">Experience</a> : <></>}
        {hasAboutMe ? <a href="#aboutMe">About me</a> : <></>}
      </div>
    </div>
  );
}
