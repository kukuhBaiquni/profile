import React, { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  link: string;
  text: string;
  icon: ReactNode;
  color: string;
  index: number | string;
};

export default function ExpandableButton({ link, text, icon, color, index }: Props) {
  const toggleExpand = () => {
    const buttons = document.getElementsByClassName("collapsible");
    Array.from(buttons).forEach((button, idx) => {
      if (index === idx) {
        button?.classList.toggle("expand");
      } else {
        button?.classList.remove("expand");
      }
    });
    console.log(buttons);
  };

  return (
    <button
      type="button"
      onClick={toggleExpand}
      className={clsx(
        "flex items-center justify-center px-2 py-1 rounded-full text-white",
        "transition-all font-mono",
        color,
      )}
    >
      <span className="max-w-0 transition-all overflow-hidden duration-300 collapsible">
        <a
          href={link}
          target="_blank"
          className="text-sm font-normal hover:underline whitespace-nowrap"
        >
          {text}
        </a>
      </span>
      {icon}
    </button>
  );
}
