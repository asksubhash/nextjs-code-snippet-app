import { useGlobalContext } from "@/ContextApi";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { SingleNoteType } from "@/app/Types";
import TitleOutlinedIcon from "@mui/icons-material/TitleOutlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

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
      h-[700px] relative p-4 w-full max-w-2xl max-h-full shadow-lg`}
    >
      <ModalHeader setOpenContentNote={setOpenContentNote} setIsNewNote={setIsNewNote} />
      {singleNote && (
        <ModalBody singleNote={singleNote} setSingleNote={setSingleNote} />
      )}
      <ModalFooter />
    </div>
  );
}

export default ContentNoteArea;

function ModalHeader({
  setOpenContentNote,
  setIsNewNote,
}: {
  setOpenContentNote: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNewNote: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex justify-between items-center gap-8 mb-4 border-b dark:border-gray-600">
      <h2 className="text-xl font-bold">Note Details</h2>
      <CloseIcon
        sx={{ fontSize: 18, cursor: "pointer" }}
        onClick={() => {
          setIsNewNote(false);
          setOpenContentNote(false);
        }}
        className="text-slate-400 mt-[7px] cursor-pointer"
      />
    </div>
  );
}

function ModalBody({
  singleNote,
  setSingleNote,
}: {
  singleNote: SingleNoteType;
  setSingleNote: React.Dispatch<
    React.SetStateAction<SingleNoteType | undefined>
  >;
}) {
  return (
    <div className="p-4">
      <ContentNoteHeader singleNote={singleNote} setSingleNote={setSingleNote} />
      <NoteTags singleNote={singleNote} setSingleNote={setSingleNote} />
    </div>
  );
}

function ModalFooter() {
  return (
    <div className="border-t dark:border-gray-600 mt-4 pt-4 flex justify-end">
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        Save
      </button>
    </div>
  );
}

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

  const [onFocus, setOnFocus] = useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  function onUpdateTitle(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const updatedSingleNote = { ...singleNote, title: event.target.value };
    setSingleNote(updatedSingleNote);

    const updatedAllNotes = allNotes.map((note) =>
      note.id === singleNote.id ? updatedSingleNote : note
    );
    setAllNotes(updatedAllNotes);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
    if (event.key === "Escape") {
      setSingleNote(undefined);
    }
  }

  return (
    <>
      <TitleOutlinedIcon
        sx={{ fontSize: 18 }}
        className={`${onFocus ? "text-purple-600 " : "text-slate-400"} mt-[4px]`}
      />
      <textarea
        ref={textareaRef}
        placeholder="New Title..."
        value={singleNote.title}
        onChange={onUpdateTitle}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          setOnFocus(false);
        }}
        onFocus={() => {
          setOnFocus(true);
        }}
        onMouseEnter={() => {
          setOnFocus(true);
        }}
        onMouseLeave={() => {
          setOnFocus(false);
        }}
        className="font-bold text-xl outline-none resize-none h-auto overflow-hidden w-full"
      />
    </>
  );
}

function NoteTags({
  singleNote,
  setSingleNote,
}: {
  singleNote: SingleNoteType;
  setSingleNote: React.Dispatch<
    React.SetStateAction<SingleNoteType | undefined>
  >;
}) {
  const [hovered, setHovered] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  function addTag(tag: string) {
    if (!singleNote.tags.includes(tag)) {
      setSingleNote({ ...singleNote, tags: [...singleNote.tags, tag] });
    }
    setIsOpened(false);
  }

  return (
    <div className="flex text-[13px] items-center gap-2 mt-4">
      <StyleOutlinedIcon
        sx={{ fontSize: 19 }}
        className={`${hovered ? "text-purple-600" : "text-slate-400"}`}
      />
      <div
        className="flex justify-between w-full"
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        <div className="flex gap-2 flex-wrap items-center">
          {singleNote.tags.length === 0 && (
            <div className="bg-slate-100 text-slate-400 p-1 px-2 rounded-md">
              No Tags
            </div>
          )}
          {singleNote.tags.map((tag, index) => (
            <div
              key={index}
              className="bg-slate-100 text-slate-400 p-1 px-2 rounded-md"
            >
              {tag}
            </div>
          ))}
          {hovered && (
            <EditOutlinedIcon
              sx={{ fontSize: 19 }}
              onClick={() => setIsOpened(!isOpened)}
              className="text-slate-400 cursor-pointer"
            />
          )}
        </div>
        {isOpened && (
          <TagsMenu addTag={addTag} setIsOpened={setIsOpened} />
        )}
      </div>
    </div>
  );
}

function TagsMenu({
  addTag,
  setIsOpened,
}: {
  addTag: (tag: string) => void;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const tags = [
    { _id: "1", name: "Tag-1" },
    { _id: "2", name: "Tag-2" },
    { _id: "3", name: "Tag-3" },
    { _id: "4", name: "Tag-4" },
    { _id: "5", name: "Tag-5" },
    { _id: "6", name: "Tag-6" },
  ];

  return (
    <ul className="absolute top-10 bg-slate-100 w-[60%] p-3 rounded-md flex flex-col gap-2 shadow-lg">
      {tags.map((tag) => (
        <li
          key={tag._id}
          className="p-1 px-2 select-none hover:bg-slate-700 hover:text-white text-slate-500 rounded-md transition-all cursor-pointer"
          onClick={() => addTag(tag.name)}
        >
          {tag.name}
        </li>
      ))}
      <li
        className="p-1 px-2 select-none hover:bg-slate-700 hover:text-white text-slate-500 rounded-md transition-all cursor-pointer"
        onClick={() => setIsOpened(false)}
      >
        Close
      </li>
    </ul>
  );
}
