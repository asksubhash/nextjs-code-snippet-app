import { useGlobalContext } from "@/ContextApi";
import React from "react";
import SingleNoteSection from "./SingleNoteSection";

export default function AllNoteSection() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  const {
    openContentNoteObject: { openContentNote },
  } = useGlobalContext();
  return (
    <div className={`mt-5 grid  gap-4 ${openContentNote?"md:grid-cols-1":" grid-cols-1 sm:grid-cols-2 md:grid-cols-3"}`}>
      <SingleNoteSection />
      <SingleNoteSection />
      <SingleNoteSection />
      <SingleNoteSection />
      <SingleNoteSection />
      <SingleNoteSection />
    </div>
  );
}
