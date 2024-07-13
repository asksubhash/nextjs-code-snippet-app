import { useGlobalContext } from "@/ContextApi";
import React, { useEffect, useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { SingleNoteType } from "@/app/Types";

function ContentNoteArea() {
  const {
    openContentNoteObject: { openContentNote, setOpenContentNote },
    isMobileObject: { isMobile },
    selectedNotObject: { selectedNote },
    isNewNoteObject: { isNewNote, setIsNewNote },
    allNotesObject: { allNotes, setAllNotes },
  } = useGlobalContext();

  const [singleNote, setSingleNote] = useState<SingleNoteType | undefined>(
    undefined
  );

  useEffect(() => {
    if (openContentNote && selectedNote) {
      setSingleNote(selectedNote);
    }
  }, [openContentNote, selectedNote]);

  useEffect(() => {
    if (isNewNote && singleNote && singleNote.title !== "") {
      setAllNotes([...allNotes, singleNote]);
      setIsNewNote(false);
    }
  }, [isNewNote, singleNote, allNotes, setAllNotes, setIsNewNote]);

  return (
    <div
      className={`border z-50 bg-white p-3 rounded-lg ${
        openContentNote ? "block" : "hidden"
      }
      ${isMobile ? "absolute w-[93%]" : ""}
      h-[700px] relative p-4 w-full max-w-2xl max-h-full`}
    >
      <div className="flex items-center justify-between p-4 md:p-1 border-b rounded-t dark:border-gray-600">
        {singleNote && (
          <ContentNoteHeader
            singleNote={singleNote}
            setSingleNote={setSingleNote}
          />
        )}
        <button
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm py-1 px-2 text-center"
          onClick={() => setOpenContentNote(false)}
        >
          <CloseOutlinedIcon sx={{ fontSize: 18 }} />
        </button>
      </div>
    </div>
  );
}

export default ContentNoteArea;

function ContentNoteHeader({
  singleNote,
  setSingleNote,
}: {
  singleNote: SingleNoteType;
  setSingleNote: React.Dispatch<
    React.SetStateAction<SingleNoteType | undefined>
  >;
}) {
  const {
    allNotesObject: { allNotes, setAllNotes },
  } = useGlobalContext();

  function onUpdateTitle(event: React.ChangeEvent<HTMLInputElement>) {
    const updatedSingleNote = { ...singleNote, title: event.target.value };
    setSingleNote(updatedSingleNote);

    const updatedAllNotes = allNotes.map((note) => 
      note.id === singleNote.id ? updatedSingleNote : note
    );
    setAllNotes(updatedAllNotes);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
    if (event.key === "Escape") {
      setSingleNote(undefined);
    }
  }

  return (
    <input
      placeholder="New Title..."
      value={singleNote.title}
      onChange={onUpdateTitle}
      onKeyDown={handleKeyDown}
      className="bg-slate-100 w-[70%] rounded-md border-0 focus:border-0 focus:outline-none focus:shadow-none text-sm text-slate-500"
    />
  );
}
