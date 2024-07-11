import React from "react";
import DataObjectIcon from "@mui/icons-material/DataObject";

export default function Logo() {
  return (
    <div className=" flex gap-2 items-center ">
      <div className={`bg-main p-[6px] rounded-md`}>
        <DataObjectIcon sx={{ fontSize: 27, color:"white", }} />
      </div>
      <div className=" flex gap-1 text-[19px]">
        <span className={`font-bold text-main `}>Snippet</span>
        <span className="text-slate-400">Store</span>
      </div>
    </div>
  );
}
