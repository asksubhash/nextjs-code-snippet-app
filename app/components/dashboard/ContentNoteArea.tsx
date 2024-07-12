import { useGlobalContext } from "@/ContextApi";
import React, { useEffect, useState } from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { SingleNoteType } from "@/app/Types";

function ContentNoteArea() {
  const {
    openContentNoteObject: { openContentNote, setOpenContentNote },
    isMobileObject: { isMobile, setIsMobile },
    selectedNotObject: { selectedNote, setSelectedNote }
  } = useGlobalContext();

  const [singleNote, setSingleNote] = useState<SingleNoteType | undefined>(undefined);
 
  useEffect(() => {

    if(openContentNote){
      if(selectedNote){
        setSingleNote(selectedNote);
      }
    }

    // if (openContentNote && selectedNote) {
    //   setSingleNote(selectedNote);
    // }
    
    // else {
    //   setSingleNote({
    //     id: "string",
    //     title: "string",
    //     isFavorite: false,
    //     tags: ['hello', 'ss'],
    //     description: "SS",
    //     code: "SS",
    //     language: "SS",
    //     creationDate: "string"
    //   });
    // }
  }, [openContentNote, selectedNote]);

  return (
    <div
      className={`border z-50 bg-white p-3 rounded-lg ${
        openContentNote ? "block" : "hidden"
      }
      ${isMobile ? "absolute w-[93%]" : ""}
      h-[700px] relative p-4 w-full max-w-2xl max-h-full`}
    >
      <div className="flex items-center justify-between p-4 md:p-1 border-b rounded-t dark:border-gray-600">
        {/* <h3 className="text-xl font-semibold text-gray-900"> */}
          {singleNote && (
            <ContentNoteHeader singleNote={singleNote} setSingleNote={setSingleNote} />
          )}
        {/* </h3> */}
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

const ContentNoteHeader: React.FC<{
  singleNote: SingleNoteType;
  setSingleNote: React.Dispatch<React.SetStateAction<SingleNoteType | undefined>>;
}> = ({ singleNote, setSingleNote }) => {
  const {
    allNotesObject: { allNotes,setAllNotes }
  } = useGlobalContext();

  function onUpdateTitle(event:React.ChangeEvent<HTMLInputElement>){
    const newSingleNote={...singleNote,title:event.target.value}
    setSingleNote(newSingleNote);

    const newAllNotes=allNotes.map((note)=>{
      // if(note._id==singleNote._id) return singleNote;
      return singleNote;
    });
    setAllNotes(newAllNotes);
  }



  // Example JSX for the header
  return (
   <input type="text" placeholder="New Title..."
   value={singleNote.title}
   onChange={onUpdateTitle} />
  );
};
