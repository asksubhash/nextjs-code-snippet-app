import React from "react";
import { SiJavascript } from "react-icons/si";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

export default function NoteFooter({language}:{language:string}) {
  return (
    <div className=" flex justify-between text-[13px] text-slate-400 mx-4 mt-3">
      <div className=" flex gap-1 items-center">
        <SiJavascript size={15} className=" mb-[2px]" />
        {language}
      </div>
      <DeleteRoundedIcon sx={{ fontSize: 17 }} className=" cursor-pointer" />
    </div>
  );
}
