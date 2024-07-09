import React from "react";
import ProfileUserDetail from "./TopBar/ProfileUserDetail";
import { useGlobalContext } from "@/ContextApi";
import SearchBar from "./TopBar/SearchBar";
import DarkMode from "@/app/components/dashboard/DarkMode";

function ContentArea() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div className={`w-[80%]  p-5 ${
      darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"
    }`}>
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
    <div className={`rounded-lg flex justify-between items-center p-3
    ${
      darkMode[1].isSelected ? "bg-slate-800 text-white" : "bg-white"
    }`}>
      <ProfileUserDetail />
      <SearchBar/>
      <DarkMode/>
    </div>
  );
}
