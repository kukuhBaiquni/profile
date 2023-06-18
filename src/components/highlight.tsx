import React from "react";
import SocmedList from "./socmed-list";
import clsx from "clsx";

export default function Highlight() {
  return (
    <div
      className={clsx(
        "expertise absolute backdrop-blur-sm bg-zinc-900 rounded-xl lg:block hidden lg:left-16 left-0 top-0 md:top-[100px]",
        "overflow-hidden font-semibold p-8 t border border-orange-600",
      )}
    >
      <h1
        data-text="Kukuh Baiquni;"
        className="text-4xl md:text-6xl font-rajdhani text-gray-700 name-effect"
      >
        Kukuh Baiquni;
      </h1>
      <p className="text-sm md:text-xl text-gray-400">Software Engineer & Data Analyst</p>
      <ul className="my-10 text-lg flex flex-col gap-y-2 text-blue-400 font-mono list-disc list-inside">
        <li>Web Development</li>
        <li>Mobile Apps Development</li>
        <li>Data Visualization</li>
      </ul>
      <SocmedList />
    </div>
  );
}
