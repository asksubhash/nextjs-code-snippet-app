import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
export default function NoteHeader() {
  return (
    <div className='flex justify-between mx-4'>
      <span className=' font-bold text-lg w-[87%]'>
        Lorem ipsum, dolor sit amet consectetur adipis
      </span>
      <FavoriteBorderOutlinedIcon  className=' text-slate-400 cursor-pointer'/>
    </div>
  )
}
