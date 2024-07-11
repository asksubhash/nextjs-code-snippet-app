import React from "react";
import { useGlobalContext } from "@/ContextApi";
import DarkMode from "@/app/components/dashboard/DarkMode";
import ProfileUserDetail from "@/app/my-notes/Components/ContentArea/TopBar/ProfileUserDetail";
import SearchBar from "@/app/my-notes/Components/ContentArea/TopBar/SearchBar";
import SideBarMenuIcon from "./SideBarMenuIcon";
import SwiperSelection from "./NotesArea/SwiperSelection";
import AllNoteSection from "./NotesArea/AllNoteSection";
import ContentNoteArea from "./ContentNoteArea";

function ContentArea() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  const {
    openContentNoteObject: { openContentNote },
  } = useGlobalContext();
  return (
    <div
      className={`${
        darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"
      } p-5`}
    >
      <TopBar />
      <div className={`gap-4 mt-5 ${openContentNote ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2" : "flex"}`}>
        <div className={`${openContentNote ? "w-50%" : "w-full"}`}>
          <SwiperSelection />
          <AllNoteSection />
        </div>
        <ContentNoteArea />
      </div>
    </div>
  );
}

export default ContentArea;
function TopBar() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <>
      <div
        className={`rounded-lg flex justify-between items-center p-3
    ${darkMode[1].isSelected ? "bg-slate-800 text-white" : "bg-white"}`}
      >
        <ProfileUserDetail />
        <SearchBar />

        <div className=" flex gap-4 items-center">
          <DarkMode />
          <SideBarMenuIcon />
        </div>
      </div>
    </>
  );
}
