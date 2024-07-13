import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import DarkMode from "@/app/components/dashboard/DarkMode";
import { useGlobalContext } from "@/ContextApi";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { SingleNoteType } from "@/app/Types";
import { v4 as uuidv4 } from "uuid";

function HeaderSearchBar() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <>
      <div
        className={`${
          darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"
        } relative pl-3 w-[60%] h-[38px] rounded-3xl flex items-center gap-2 sm:ml-4`}
      >
        <SearchIcon className="text-purple-500" sx={{ fontSize: 13 }} />
        <input
          placeholder="Search a Snippet..."
          className={`${
            darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"
          } w-[70%] outline-none text-sm bg-slate-100 text-slate-500`}
          type="text"
        />

        <AddSnippetBtn />
      </div>
    </>
  );
}

export default HeaderSearchBar;
function AddSnippetBtn() {
  const {
    openContentNoteObject: { setOpenContentNote },
    selectedNotObject: { setSelectedNote },
    allNotesObject: { allNotes, setAllNotes },
    isNewNoteObject: { isNewNote, setIsNewNote },
  } = useGlobalContext();

  function openTheContentNote() {
    const newSingleNote: SingleNoteType = {
      id: uuidv4(), // Change _id to id
      title: "",
      creationDate: "",
      tags: [],
      description: "",
      code: "",
      isFavorite: false,
      language: "",
    };
    setAllNotes([...allNotes, newSingleNote]);
    setSelectedNote(newSingleNote);
    setOpenContentNote(true);
  }

  return (
    <div
      className={`absolute flex gap-1 px-3 rounded-3xl max-md:px-1 bg-main p-1 text-[13px] text-white top-[6px] right-[6px] items-center cursor-pointer select-none`}
    >
      <AddOutlinedIcon sx={{ fontSize: 18 }} />
      <div className="max-md:hidden" onClick={openTheContentNote}>
        Snippet
      </div>
    </div>
  );
}
