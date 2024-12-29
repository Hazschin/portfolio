import { breadcrumb } from "@/types/components";
import "./breadcrumb.css";
import React from "react";
import returnIcon from "@/utils/returnIcon";

export default function Breadcrumb({ icon, iconKeyword, label }: breadcrumb) {
  iconKeyword = iconKeyword?.toLowerCase().replace(/\s/gi, "");

  return (
    <span className="breadcrumb flex justify-center gap-1 rounded-full">
      {icon || (iconKeyword && returnIcon(iconKeyword)) || <></>}
      <span className="text-base">{label}</span>
    </span>
  );
}
