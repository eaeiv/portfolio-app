import React from "react"
import userData from "../constants/data"

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
        
      </div>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h2 className="text-2xl md:text-5xl italic py-20 text-center md:text-left">
          WIP. Please come back later.
        </h2>
      </div>
      {/* <div className="bg-gray-200 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              key={proj.title}
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>

      </div> */}
    </section>
  )
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="w-full block shadow-2x1">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt={title}
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
          <h1 className="absolute top-10 left-10 text-white font-bold text-xl bg-red-500 rounded-md px-2">
            {title}
          </h1>
          <h1 className="absolute bottom-10 left-10 text-red-500 bg-gray-200 rounded-md px-2 dark:bg-gray-900 font-bold text-xl">
            { number.length === 1 ? "0" + number : number }
          </h1>
        </div>
      </div>
    </a>
  )
}