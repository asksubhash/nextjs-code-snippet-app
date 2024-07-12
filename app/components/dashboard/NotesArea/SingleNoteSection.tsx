import { useGlobalContext } from "@/ContextApi";
import React from "react";
import NoteHeader from "./NoteHeader";
import NoteDate from "./NoteDate";
import NoteTags from "./NoteTags";
import NoteDescription from "./NoteDescription";
import NoteFooter from "./NoteFooter";
import CodeBlock from "./CodeBlock";
import{SingleNoteType} from "@/app/Types";

export default function SingleNoteSection({note}:{note:SingleNoteType}) {
  const {
    darkModeObject: { darkMode },
    openContentNoteObject:{openContentNote}
  } = useGlobalContext();
  
  const {title,creationDate,description,isFavorite,tags,code,language}=note;
  console.log(title);
  
  return (
    <div
      className={`${
        darkMode[1].isSelected ? "bg-slate-800 text-white" : " bg-white"
      } max-sm:w-full  rounded-md py-4  mt-2 shadow-sm hover:shadow-lg`}
    >

      <NoteHeader title={title} isFavorite={isFavorite}/>
      <NoteDate creationDate={creationDate}/>
      <NoteTags tags={tags}/>
      <NoteDescription description={description} />
      <CodeBlock language={language} code={code} />
      <NoteFooter language={language}/>
    </div>
  );
}
