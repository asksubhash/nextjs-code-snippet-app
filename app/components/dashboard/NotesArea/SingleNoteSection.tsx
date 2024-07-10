import { useGlobalContext } from "@/ContextApi";
import React from "react";
import NoteHeader from "./NoteHeader";
import NoteDate from "./NoteDate";
import NoteTags from "./NoteTags";
import NoteDescription from "./NoteDescription";
import NoteFooter from "./NoteFooter";
import CodeBlock from "./CodeBlock";

export default function SingleNoteSection() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`${
        darkMode[1].isSelected ? "bg-slate-800 text-white" : " bg-white"
      } max-sm:w-full  rounded-md py-4  mt-2`}
    >

      <NoteHeader/>
      <NoteDate/>
      <NoteTags/>
      <NoteDescription/>
      <CodeBlock language="javascript" />
      <NoteFooter/>
    </div>
  );
}
