"use client";
import { button } from "@/types/components";
import "./button.css";
import returnIcon from "@/utils/returnIcon";

export default function Button({ icon, iconKeyword, label, redirect }: button) {
  const handleClick = () => {
    if (redirect) window.location.href = redirect;
  };
  iconKeyword = iconKeyword?.toLowerCase().replace(/\s/gi, "");

  return (
    <button
      className="button flex flex-row justify-center gap-1 py-1 px-5 rounded"
      onClick={handleClick}
    >
      {icon || (iconKeyword && returnIcon(iconKeyword)) || <></>}
      <span>{label}</span>
    </button>
  );
}
