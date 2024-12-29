import React, { CSSProperties, JSX } from "react";
import { GitHub, Link, LinkedIn } from "@mui/icons-material";

interface IconProps {
  [key: string]: JSX.Element;
}

const icons: IconProps = {
  github: <GitHub />,
  linkedin: <LinkedIn />,
  link: <Link />,
};

export default function returnIcon(keyword: string): JSX.Element | boolean {
  if (!keyword) return false;
  return icons[keyword] || <></>;
}
