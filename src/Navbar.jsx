import React from 'react'

export default function Navbar() {
  return (
    <div className="flex justify-center  w-[100%]">
         <img className="w-[5rem] hidden md:block" src="https://www.creativefabrica.com/wp-content/uploads/2020/06/18/1592479206/Martini-black-580x386.jpg" alt="" /> 
      <b className="text-black ml-[1rem] text-[1.5rem] md:text-[2.7rem]">
        COKTAIL'S
      </b>
      <b className="text-gray-600 ml-[1rem] text-[1.5rem] md:text-[2.7rem] ">
        COKTAIL'S
      </b>
      <b className="hidden md:block text-gray-400 ml-[1rem] text-[2rem] md:text-[2.7rem]">
        COKTAIL'S
      </b> 
    </div>
  )
}
