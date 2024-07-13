import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useGlobalContext } from '@/ContextApi';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { SingleNoteType } from '@/app/Types';
export default function NoteHeader({ note }: { note: SingleNoteType }) {
const {
  openContentNoteObject:{openContentNote,setOpenContentNote},
  selectedNotObject:{selectedNote,setSelectedNote}
}=useGlobalContext();


const handleNoteClick = () => {
  setSelectedNote(note);
  setOpenContentNote(true);
};


  return (
    <div className='flex justify-between mx-4'>
      <span 
      onClick={()=>{handleNoteClick()}}
      className=' font-bold text-lg w-[87%] cursor-pointer hover:text-main'>
        {note.title}
      </span>
      {note.isFavorite? (
        <FavoriteRoundedIcon className='text-red-500 cursor-pointer'/>
      ) : (
        <FavoriteBorderOutlinedIcon className='text-slate-400 cursor-pointer'/>
      )}
    </div>
  )
}
