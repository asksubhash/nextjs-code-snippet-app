import { useGlobalContext } from '@/ContextApi';
import React from 'react'

export default function NoteDescription() {
  const {darkModeObject: { darkMode }} = useGlobalContext();
  return (
    <div className={`${darkMode[1].isSelected?"bg-slate-300":" "} text-slate-600 text-[11p] mt-4 mx-4`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nostrum voluptates aliquid. Sequi, perferendis dolor. Nobis fuga praesentium commodi natus eius enim vitae consectetur sapiente reprehenderit, porro tempora, deleniti ipsum!
    </div>
  )
}
