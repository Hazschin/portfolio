import { PersonOutlineOutlined } from "@mui/icons-material";
import "./aboutMe.css";

export default function AboutMe({ description }: { description?: string }) {
  if (!description) return <></>;
  return (
    <div className="flex flex-col">
      <p className="flex flex-row gap-3 items-center py-10">
        <PersonOutlineOutlined />{" "}
        <span id="aboutMe" className="text-2xl font-bold">
          About me
        </span>
      </p>
      <div
        className="flex flex-col gap-3 text-white-70"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
}
