import { ExperienceInterface } from "@/app/interfaces/experience.interface";

interface Props {
  experience: ExperienceInterface[];
}

export default function Experience({ experience }: Props) {
  return (
    <div className="p-3">
      <div className="block md:hidden mb-6">
        <h2 className="text-sm font-bold uppercase text-slate-200">
          Experiencia
        </h2>
      </div>
      {experience.map((item) => (
        <div
          key={item.id}
          className="group hover:bg-slate-800 rounded text-slate-400 grid grid-cols-3 py-3"
        >
          <div className="col-span-3 sm:col-span-1 mb-3">
            <div className="text-slate-400">{item.date}</div>
          </div>
          <div className="col-span-3 sm:col-span-2">
            <div className="text-lg text-slate-200 md:group-hover:text-sky-500">
              {item.title} - {item.company}
            </div>
            <div className="my-3">{item.description}</div>
            <ul className="flex flex-wrap">
              {item.skills.map((skill) => (
                <li key={skill} className="mt-1 mr-3">
                  <div className="flex items-center rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium leading-5 text-sky-500 ">
                    {skill}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
