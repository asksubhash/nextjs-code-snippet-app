import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";
import { useGlobalContext } from "@/ContextApi";

export default function SwiperSelection() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <>
      <div
        className={`${
          darkMode[1].isSelected ? "bg-slate-800 text-white" : "bg-white"
        } p-3 rounded-lg flex gap-5 mt-5`}
      >
        <div className="overflow-x-auto w-[100%] ">
          <Swiper
            slidesPerView="auto"
            spaceBetween={10}
            freeMode={true}
            className="mySwiper"
            modules={[FreeMode]}
          >
            <SwiperSlide className=" bg-main p-1 rounded-md text-white w-20">All</SwiperSlide>
            <SwiperSlide className="text-slate-400">Javascript Exercises</SwiperSlide>
            <SwiperSlide className="text-slate-400">React Exercises</SwiperSlide>
            <SwiperSlide className="text-slate-400">React Exercises</SwiperSlide>
            <SwiperSlide className="text-slate-400">React Exercises</SwiperSlide>
            <SwiperSlide className="text-slate-400">React Exercises</SwiperSlide>
            <SwiperSlide className="text-slate-400">React Exercises</SwiperSlide>
            <SwiperSlide className="text-slate-400">React Exercises</SwiperSlide>
            <SwiperSlide className="text-slate-400">React Exercises</SwiperSlide>
          </Swiper>
        </div>

        <button className="bg-main p-1 rounded-md px-3 flex gap-1 items-center text-white">
<AddOutlinedIcon sx={{fontSize:18}}/>
<span>Tag</span>
        </button>
      </div>
    </>
  );
}
