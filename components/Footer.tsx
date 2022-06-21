import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center md:items-center mt-8">
          <div className="inline-block transform hover:scale-150 hover:-rotate-3 transition duration-150">
            <p
              className="hover:bg-gradient-to-r from-purple-500 to-pink-500 rounded-md px-2 py-1  hover:text-gray-50"
            >
              &copy; Ernest A Elgin IV. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}