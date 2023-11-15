import Image from "next/image";
import { Project } from "@/app/interfaces/project.interface";

interface Props {
  projects: Project[];
}

export default function Project({ projects }: Props) {
  
  return (
    <div id="projects" className="p-3">
      <div className="block md:hidden mb-6">
        <h2 className="text-sm font-bold uppercase text-slate-200">
          Proyectos
        </h2>
      </div>
      {projects.map((item) => (
        <div
          key={item.id}
          className="group hover:bg-slate-800 rounded text-slate-400 grid grid-cols-3 sm:py-7 py-5"
        >
          <div className="hidden col-span-3 sm:block sm:col-span-1 mb-3 pr-3">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-lg"
                sizes="100vw"
                // Make the image display full width
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>
          <div className="col-span-3 sm:col-span-2">
            <div className="text-lg text-slate-200 md:group-hover:text-sky-500">
              {item.title}
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
          <div className="block col-span-3 sm:hidden my-3">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-lg"
                sizes="100vw"
                // Make the image display full width
                style={{
                  width: '70%',
                  height: 'auto',
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
