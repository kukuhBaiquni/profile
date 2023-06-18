import React from "react";
import ExpandableButton from "./expandable-button";
import socmed from "@/constants/socmed";

export default function SocmedList({ index }: { index?: number }) {
  return (
    <div className="flex gap-2">
      {socmed.map((item, idx) => (
        <ExpandableButton
          key={item.link}
          index={idx + (index || 0) * 5}
          text={item.text}
          link={item.link}
          color={item.color}
          icon={<i className={item.icon}></i>}
        />
      ))}
    </div>
  );
}
