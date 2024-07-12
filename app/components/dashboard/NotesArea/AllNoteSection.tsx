import { useGlobalContext } from "@/ContextApi";
import React from "react";
import SingleNoteSection from "./SingleNoteSection";
export default function AllNoteSection() {
  const {
    darkModeObject: { darkMode },
    openContentNoteObject: { openContentNote },
    allNotesObject:{allNotes},
  } = useGlobalContext();
  return (
    <div className={`mt-5 grid  gap-4 ${openContentNote?"md:grid-cols-1":" grid-cols-1 sm:grid-cols-2 md:grid-cols-3"}`}>
    {allNotes.map((note,index) => (
        <div key={index}>
        <SingleNoteSection note={note} />
        </div>
       
      ))}
    </div>
  );
}
