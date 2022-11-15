import React from "react";
import Image from "next/image";

interface IconProps {
  iconName: "search" | "clickMe";
}
export const Icon = ({ iconName }: IconProps) => {
  return (
    <section
      id="icon"
      style={{ marginRight: "0.3125rem" }}
    >
      <Image
        alt="icons from bitTek3"
        width="20px"
        height="20px"
        src={`/icons/${iconName}.png`}
      />
    </section>
  );
};
