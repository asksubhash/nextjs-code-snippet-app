import { useGlobalContext } from '@/ContextApi';
import React from 'react'

export default function NoteDescription({description}:{description:string}) {
  const {darkModeObject: { darkMode }} = useGlobalContext();
  return (
    <div className={`${darkMode[1].isSelected?" bg-slate-800 text-slate-400":"text-slate-600 "} text-[11p] mt-4 mx-4`}>
     {description}
    </div>
  )
}
