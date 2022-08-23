import SiteWrapper from "../components/SiteWrapper";
import userData from "../constants/data";

export default function about() {
  return (
    <SiteWrapper>
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
          <h1 className="text-9xl md:text-9xl font-bold py-20 text-center md:text-left">
            About
          </h1>
        </div>
        <div className="bg-gray-200 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold py-5 text-left mx-4">
              {userData.about.title}
            </h1>
          </div>
          <div className="text-container max-w-6xl mx-auto">
            <p
              className="leading-loose text-justify text-2xl md:text-4xl font-semibold mx-4"
            >
              {userData.about.description}
            </p>
          </div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-900 px-4">
          <div className="pt-10 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
            <div className="inline-flex flex-col">
              <div>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Skill Set
                </h1>
                <div className="mt-4">
                  {userData.about.skills.map((skill, idx) => (
                    <SkillCard
                      key={skill.lang}
                      lang = {skill.lang}
                      experience = {skill.experience}
                      index = {idx}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-10">
                <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Contact
                </h1>
                Have any questions? Need an extra hand on your project? {" "}
                <div className="inline-block transform hover:scale-150 hover:-rotate-3 transition duration-150">
                  <a 
                    href={`mailto:${userData.email}`}
                    className="border-b-2 border-gray-800 hover:border-b-0 hover:text-gray-50 hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:rounded-md hover:px-2 hover:py-1"
                  >Shoot me an email.</a>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              {userData.about.bio?.map((desc, idx) => (
                <p
                  key={idx}
                  className="text-xl text-justify text-gray-700 mb-4 dark:text-gray-300 "
                >
                  {desc}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteWrapper>
  )
}

const SkillCard = ({ lang, experience, index }) => {
  
  const stylesArr = [
    "relative border p-1 rounded-md my-1 bg-gradient-to-r from-blue-200 to-orange-200",
    "relative border p-1 rounded-md my-1 bg-gradient-to-r from-orange-200 to-red-200",
    "relative border p-1 rounded-md my-1 bg-gradient-to-r from-red-200 to-violet-200",
    "relative border p-1 rounded-md my-1 bg-gradient-to-r from-violet-200 to-blue-200",
  ]

  console.log(stylesArr.at(index%4));

  return (
    <div className={stylesArr.at(index%4)}>
      <div className="flex flex-row">
        <div className="grow">
          {lang}
        </div>
        <div className="flex">
          {experience}
        </div>
      </div>
    </div>
  )
}