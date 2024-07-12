import React from 'react'

export default function NoteDate({creationDate}:{creationDate:string}) {

  const date = new Date(creationDate);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  const dayWithSuffix = (day:number) => {
    if (day > 3 && day < 21) return `${day}th`;
    switch (day % 10) {
      case 1: return `${day}st`;
      case 2: return `${day}nd`;
      case 3: return `${day}rd`;
      default: return `${day}th`;
    }
  };

  const newFormattedDate=`${dayWithSuffix(day)} ${month} ${year}`;
  return (
    <div className=' text-slate-900 text-[11px] flex gap-1 font-light mx-4 mt-1'>
      <span className=''>{newFormattedDate}</span>
    </div>
  )
}
