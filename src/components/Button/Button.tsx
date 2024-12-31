"use client";
import { button } from "@/types/components";
import "./button.css";
import returnIcon from "@/utils/returnIcon";
import Link from "next/link";

export default function Button({ icon, iconKeyword, label, redirect }: button) {
  iconKeyword = iconKeyword?.toLowerCase().replace(/\s/gi, "");

  return (
    <Link href={redirect || ""} target={redirect ? "_blank" : ""}>
      <button className="button flex flex-row justify-center gap-1 py-1 px-5 rounded">
        {icon || (iconKeyword && returnIcon(iconKeyword)) || <></>}
        <span>{label}</span>
      </button>
    </Link>
  );
}
