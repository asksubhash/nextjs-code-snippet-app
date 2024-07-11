import { useGlobalContext } from "@/ContextApi";
import React, { useEffect } from "react";

export default function ContentNoteArea() {
  const {
    openContentNoteObject: { openContentNote, setOpenContentNote },
  } = useGlobalContext();

  const {
    isMobileObject: { isMobile },
  } = useGlobalContext();
  
  return (
    <div
      className={`border  z-50 bg-white p-3 rounded-lg ${
        openContentNote ? "block" : "hidden"
      }
      ${isMobile?" absolute w-[93%]":""}
      h-[700px]`}
    >
      Your content note area goes here
      <button onClick={() => setOpenContentNote(false)}>
        Close Content Note
      </button>
    </div>
  );
}
