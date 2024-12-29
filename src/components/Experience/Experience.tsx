import { CardTravelOutlined } from "@mui/icons-material";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import "./experience.css";
import { ResumeWorkType } from "@/types/resumeType";

export default function Experience({ works }: { works?: ResumeWorkType[] }) {
  if (!works) return <></>;
  return (
    <div>
      <div
        id="experience"
        className="flex items-center gap-3 text-2xl font-bold py-10"
      >
        <CardTravelOutlined />
        Experience
      </div>
      {works.map((work, i) => {
        return (
          <div className="flex justify-center" key={i}>
            <div className="lineContainer basis-1/12 flex justify-center">
              <div className="line"></div>
              <div className="dot pt-8">
                <div></div>
              </div>
            </div>
            <div className="basis-11/12 mb-10">
              <ExperienceCard
                name={work.name}
                position={work.position}
                startDate={work.startDate}
                endDate={work.endDate}
                description={work.summary}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
