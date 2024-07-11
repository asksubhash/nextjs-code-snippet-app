import { useGlobalContext } from "@/ContextApi";
import React from "react";
import SingleNoteSection from "./SingleNoteSection";

export default function AllNoteSection() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <SingleNoteSection />
      <SingleNoteSection />
      <SingleNoteSection />
      <SingleNoteSection />
      <SingleNoteSection />
      <SingleNoteSection />
    </div>
  );
}
