import React from "react";
import { useGlobalContext } from "@/ContextApi";
import SwiperSelection from "./NotesArea/SwiperSelection";
import AllNoteSection from "./NotesArea/AllNoteSection";
import ContentNoteArea from "./ContentNoteArea";

function ContentArea() {
  const {
    openContentNoteObject: { openContentNote },
  } = useGlobalContext();
  return (
      <div className={`gap-4 mt-5 ${openContentNote ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2" : "flex"}`}>
        <div className={`${openContentNote ? "w-50%" : "w-full"}`}>
          <SwiperSelection />
          <AllNoteSection />
        </div>
        <ContentNoteArea />
      </div>
  );
}

export default ContentArea;
