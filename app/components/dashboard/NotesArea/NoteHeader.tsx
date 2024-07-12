import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useGlobalContext } from '@/ContextApi';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
export default function NoteHeader({title,isFavorite}:{title:string,isFavorite:boolean}) {
const {openContentNoteObject:{openContentNote,setOpenContentNote}}=useGlobalContext();

  return (
    <div className='flex justify-between mx-4'>
      <span 
      onClick={()=>{setOpenContentNote(true)}}
      className=' font-bold text-lg w-[87%] cursor-pointer hover:text-main'>
        {title}
      </span>
      {isFavorite? (
        <FavoriteRoundedIcon className='text-red-500 cursor-pointer'/>
      ) : (
        <FavoriteBorderOutlinedIcon className='text-slate-400 cursor-pointer'/>
      )}
    </div>
  )
}
