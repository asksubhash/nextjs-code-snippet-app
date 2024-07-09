import { useGlobalContext } from "@/ContextApi";
import React from "react";

export default function DarkMode() {
  const {
    darkModeObject: { darkMode, setDarkMode },
  } = useGlobalContext();

  function handelClickDarkMode(index: number) {
    const updateDarkModeObject = darkMode.map((item, i) => {
      if (i === index) {
        return { ...item, isSelected: true };
      } else {
        return { ...item, isSelected: false };
      }
    });

    setDarkMode(updateDarkModeObject);
  }
  return (
    <div className={`
      ${darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"} h-[36px] w-[74px] rounded-3xl flex items-center gap-2 pl-[5px]`}>
      {darkMode.map((item, index) => {
        return (
          <div
            key={index}
            className={` ${
              item.isSelected
                ? "bg-main text-white"
                : "bg-stone-100 text-main"
            }
   w-7 h-7 flex items-center justify-center rounded-full top-[4px] p-1 left-1 cursor-pointer select-none 
   `}
            onClick={() => handelClickDarkMode(index)}
          >
            {item.icon}
          </div>
        );
      })}
    </div>
  );
}
