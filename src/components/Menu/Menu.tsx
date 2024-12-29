import "./menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <div
        className="flex gap-5 text-base py-2 px-5 rounded-full"
        style={{ width: "fit-content", margin: "0 auto" }}
      >
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#aboutMe">About me</a>
      </div>
    </div>
  );
}
