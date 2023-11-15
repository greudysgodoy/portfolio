import Link from "next/link";
import Image from "next/image";

import NavLinks from "@/app/components/nav-links";
import SocialMedia from "@/app/components/social-media";

import { socialMedia } from "../constants/social-media";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col justify-between md:py-8">
      <div className="mb-2">
        <div className="flex justify-center">
          <Image
            className="rounded-full w-40 h-40 border-2 border-sky-400"
            src="/images/profile.jpeg"
            alt="Picture of the author"
            width="500"
            height="500"
          />
        </div>
        <Link className="mb-4 flex justify-center" href="/">
          <div className="text-slate-200 text-2xl sm:text-4xl font-bold tracking-tighter">
            Greudys Godoy
          </div>
        </Link>
        <div className="mb-4 text-sky-400 text-2xl font-medium tracking-tight">
          Full Stack Software Engineer
        </div>
        <div className="mb-4 text-slate-400 text-base font-medium tracking-tight">
          Soy ingeniero en informática y Full Stack Developer. Me gusta trabajar
          con tecnología actual y crear soluciones informáticas a necesidades reales. Disfruto
          trabajar en equipo y nunca dejar de aprender.
        </div>
        <nav className="hidden md:block md:py-10">
          <NavLinks />
        </nav>
      </div>

      <SocialMedia links={socialMedia} />
    </div>
  );
}
