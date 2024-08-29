import { DownloadCV, PageTitle } from "../_components";
import { ExperienceCard, ResumeCards } from "./_components";
import { useResume } from "./_hooks";


export default function Resume() {
  const { profile, skills, skill, profileMap, workExperience, education } = useResume();

  return (
    <div className="h-full">
      <PageTitle title="RESUME" subtitle="A summary of my work experience and education" />
      <div className="container flex items-center flex-col">
        <div className="flex flex-col md:flex-row md:space-x-20 space-y-10 md:space-y-0 ">
          {/* Profile */}
          <ResumeCards title="Profile" description={profile}>
            <div>
              {profileMap.map((item, index) => (
                <div key={index} className="flex flex-col py-3">
                  <span className="text-xl font-bold">{item.title}</span>
                    {
                      item.title === "Website" ? 
                      <a href={item.description} target="_blank" rel="noreferrer" className="text-sky-400 underline">{item.description}</a> :
                      <span className="text-lg">{item.description}</span>
                    }
                </div>
              ))}
            </div>
          </ResumeCards>
          {/* Skills */}
          <ResumeCards title="Skills (Top 10)" description={skill}>
            <ul className="list-inside py-5 w-full">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="relative group pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <span className="">{skill.name}</span>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 z-10">
                        {skill.description}
                      </div>
                      <span className="text-xs font-semibold inline-block text-white">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-100">
                      <div
                        style={{ width: `${skill.level}%` }}
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-400` }
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </ResumeCards>
        </div>
        <DownloadCV/>
        <div className="flex flex-col text-center mt-10">
          <span className="text-3xl text-orange-600 text-bold">Work Experience</span>
          {
            workExperience.map((experience, index) => (
              <ExperienceCard
                key={index}
                title={experience.title}
                subtitle={`${experience.initialDate} - ${experience.finalDate}`}
                name={experience.company}
                description={experience.description}
                isWork={true}
                urlName={experience.urlCompany}
              />
            ))
          }
        </div>
        <div className="flex flex-col text-center mt-10">
          <span className="text-3xl text-orange-600 text-bold">Education</span>
          {
            education.map((experience, index) => (
              <ExperienceCard
                key={index}
                title={experience.title}
                subtitle={`${experience.initialDate} - ${experience.finalDate}`}
                name={experience.institution}
                description={experience.description}
                isWork={false}
                urlName={experience.urlInstitution}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}