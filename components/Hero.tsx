import React, {useEffect} from "react";
import userData from "../constants/data";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useTheme } from "next-themes";


export default function Hero() {
  const { theme } = useTheme();
  
  var isDark = theme === "dark" ? 1 : 0;

  useEffect(() => {
    var isDark = theme === "dark" ? 1 : 0;
  }, [theme])

  const colors = [
    ["#9254ff", "#ff56b6", "#ff85ad", "#ffad85","#ffde85"],
    ["#390099", "#9e0059", "#ff0054", "#ff5400","#ffbd00"],
  ];

  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
      <RoughNotationGroup show={true}>
        <RoughNotation type="highlight" color={colors[isDark][0]} padding={[0, 2]} iterations={1}>
          <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
            Developer.
          </h1>
        </RoughNotation>
        <RoughNotation type="highlight" color={colors[isDark][1]} padding={[0, 2]} iterations={2}>
          <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
            Engineer.
          </h1>
        </RoughNotation>
        <RoughNotation type="highlight" color={colors[isDark][2]} padding={[0, 2]} iterations={3}>
          <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
            Athlete.
          </h1>
        </RoughNotation>
        <RoughNotation type="highlight" color={colors[isDark][3]} padding={[0, 2]} iterations={4}>
          <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
            Competitior.
          </h1>
        </RoughNotation>
      </RoughNotationGroup>
      </div>
      
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-20 my-10">
        <div className="w-3/4">
          <img className="h-full w-full shadow rounded-full" src={userData.avatarUrl} alt="avatar">
          </img>
        </div>
      </div>
    </div>
  )
}