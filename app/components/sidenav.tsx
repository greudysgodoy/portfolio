import Link from "next/link";
import NavLinks from "@/app/components/nav-links";
import Image from "next/image";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col">
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
          <div className="text-slate-200 text-3xl md:text-6xl sm: font-bold tracking-tighter">
            Greudys Godoy
          </div>
        </Link>
        <div className="mb-4 text-sky-400 text-2xl font-medium tracking-tight">
          Full Stack Software Engineer
        </div>
        <div className="mb-4 text-slate-400 text-base font-medium tracking-tight">
        Soy un ingeniero en informática y Full Stack Developer apasionado por crear soluciones con tecnología actual. Me encanta combinar funcionalidad y diseño para hacer que las cosas sean geniales en línea
        </div>

      </div>
      <div className="flex grow flex-row justify-start space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
    </div>
  );
}
