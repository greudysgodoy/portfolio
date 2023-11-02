import SideNav from "@/app/components/sidenav";
import About from "./components/about";
import Experience from "./components/experience";
import Project from "./components/projects";
import { projects } from "./constants/projects";
import { experiences } from "./constants/experiences";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-1/3 p-6 md:p-12">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          <About/>
          <div className="mt-5">
            <Experience experience={experiences}/>
          </div>
          <div id='projects'>
            <Project projects={projects}/>
          </div>
        </div>
      </div>
      
    </main>
  )
}
