"use client";
import React from 'react'


const hero = () => {
  return (
    <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            {/* <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-140px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/flyy.webm" type="video/webm" />
      </video> */}
          </div>
        </div>
  )
}

export default hero