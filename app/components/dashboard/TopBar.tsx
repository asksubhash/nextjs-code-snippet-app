import React from "react";
import HeaderUserDetail from "./HeaderUserDetail";
import HeaderSearchBar from "./HeaderSearchBar";
import { useGlobalContext } from "@/ContextApi";
import DarkMode from "./DarkMode";
import SideBarMenuIcon from "./SideBarMenuIcon";

export default function TopBar() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`rounded-lg flex justify-between items-center p-3
        ${darkMode[1].isSelected ? "bg-slate-800 text-white" : "bg-white"}`}
    >
      <HeaderUserDetail />
      <HeaderSearchBar />
      <div className=" flex gap-3 items-center">
        <DarkMode />
        <div className="hidden max-md:block">
          <SideBarMenuIcon />
        </div>
      </div>
    </div>
  );
}
