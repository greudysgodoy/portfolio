import SideNav from "@/app/components/sidenav";
import About from "./components/about";
import Experience from "./components/experience";
import Project from "./components/projects";
import { projects } from "./constants/projects";
import { experiences } from "./constants/experiences";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden md:justify-center">
        <div className="w-full flex-none md:w-1/3 md:max-w-sm p-8 lg:p-12">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto lg:p-12 lg:px-28">
          <section id="about">
            <About />
          </section>
          <section id="experience" className="mt-5 md:mt-32">
            <Experience experience={experiences} />
          </section>
          <section id="projects" className="mt-5 md:mt-32">
            <Project projects={projects} />
          </section>
        </div>
      </div>
    </main>
  );
}
