import { experienceCard } from "@/types/components";
import "./experiencecard.css";
import { dateFormatter } from "@/utils/dateFormatter";

export default function ExperienceCard({
  name,
  position,
  startDate = "",
  endDate = "",
  description,
}: experienceCard) {
  startDate = dateFormatter(startDate);
  endDate = dateFormatter(endDate);

  const date = startDate
    ? endDate
      ? `${startDate} - ${endDate}`
      : startDate
    : endDate || "";

  return (
    <div className="experienceCard flex flex-col px-3 py-5">
      <span className="text-2xl font-bold">{name}</span>
      <span className="text-2xl text-shine">{position}</span>
      <span className="text-base text-white-70">{date}</span>
      <span className="text-base text-white-70 mt-5">{description}</span>
    </div>
  );
}
