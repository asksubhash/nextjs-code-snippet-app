import React from "react";
import { useGlobalContext } from "@/ContextApi";
import DarkMode from "@/app/components/dashboard/DarkMode";
import ProfileUserDetail from "@/app/my-notes/Components/ContentArea/TopBar/ProfileUserDetail";
import SearchBar from "@/app/my-notes/Components/ContentArea/TopBar/SearchBar";
import SideBarMenuIcon from "./SideBarMenuIcon";

function ContentArea() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`w-full ${
        darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"
      } p-5`}
    >
      <TopBar />
    </div>
  );
}

export default ContentArea;
function TopBar() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`rounded-lg flex justify-between items-center p-3
    ${darkMode[1].isSelected ? "bg-slate-800 text-white" : "bg-white"}`}
    >
      <ProfileUserDetail />
      <SearchBar />

      <div className=" flex gap-4 items-center">
        <DarkMode />
        <SideBarMenuIcon/>
      </div>
    </div>
  );
}
