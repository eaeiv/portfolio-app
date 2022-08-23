import React from "react";
import userData from "../constants/data";
import Image from "next/image"

export default function Hero() {
  const colors = []

  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
          <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
            Developer.
          </h1>
        </div>
        <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
          Engineer.
        </h1>
        <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
          Athlete.
        </h1>
        <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
          Creative.
        </h1>
      </div>
      
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-20 my-10">
        <div className="w-3/4">
          <Image className="shadow rounded-full" src={userData.avatarUrl} alt="avatar">
          </Image>
        </div>
      </div>
    </div>
  )
}