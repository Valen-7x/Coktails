import React from 'react'
import miAudio from "../public/jazz.mp3"

export default function Navbar() {
  return (
    <div className="flex justify-center  ">
         <img className="w-[5rem]" src="https://www.creativefabrica.com/wp-content/uploads/2020/06/18/1592479206/Martini-black-580x386.jpg" alt="" />
      <b className="text-black ml-[1rem] text-[2.7rem]">
        COKTAIL'S
      </b>
      <b className="text-gray-600 ml-[1rem] text-[2.7rem] ">
        COKTAIL'S
      </b>
      <b className="text-gray-400 ml-[1rem] text-[2.7rem]">
        COKTAIL'S
      </b>
      <audio className='w-[20rem] pl-[3rem] mt-[0.5rem]' controls
        autoplay>
        <source  src={miAudio} type="audio/mpeg" />
        </audio>
    </div>
  )
}
