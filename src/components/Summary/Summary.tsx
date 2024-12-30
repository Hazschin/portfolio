import Breadcrumb from "../BreadCrumb/Breadcrumb";
import "./summary.css";
import Button from "../Button/Button";
import { ResumeBasicType, ResumeSkillType } from "@/types/resumeType";

export default function Summary({
  basics,
  skills,
}: {
  basics?: ResumeBasicType;
  skills?: ResumeSkillType[];
}) {
  if (!basics) return <></>;

  const { name, label, summary, image, profiles, available } = basics;
  let keywordsSkills: string[] = [];

  if (skills) {
    for (const skill of skills) {
      keywordsSkills = keywordsSkills.concat(skill.keywords);
    }
  }

  return (
    <div className="flex flex-row gap-3 pt-5 mt-20">
      <div className="basis-1/4">
        <img src={image} />
      </div>
      <div className="flex flex-col basis-3/8">
        <span className="text-2xl font-bold">{name}</span>
        <span className="text-2xl text-shine font-bold mb-2">{label}</span>
        {available ? (
          <div className="mb-3">
            <span className="border border-shine rounded-full py-1 px-5">
              Available for work
            </span>
          </div>
        ) : (
          <></>
        )}
        <div className="flex mb-8 flex-row gap-3">
          {keywordsSkills.map((skill, i) => (
            <Breadcrumb label={skill} key={i} iconKeyword={skill} />
          ))}
        </div>
        <div className="mb-8 text-white-90">
          <p>{summary}</p>
        </div>
        <div className="flex flex-row gap-3">
          {profiles.map((profile, i) => (
            <Button
              iconKeyword={profile.network}
              label={profile.network}
              redirect={profile.url}
              key={i}
            ></Button>
          ))}
        </div>
      </div>
    </div>
  );
}
