"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: "ACERCA DE MI",
    href: "#about",
    icon: HomeIcon
  },
  {
    name: "EXPERIENCIA",
    href: "#experience",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "PROYECTOS",
    href: "#projects",
    icon: UserGroupIcon
  },
];

export default function NavLinks() {
  const [hash, setHash] = useState("");
  const params = useParams();

  useEffect(() => {
    console.log("Hash:", window.location.hash);
    setHash(window.location.hash ?? "");
  }, [params]);

  return (
    <ul>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <li key={link.name}>
          <Link
            
            href={link.href}
            className={clsx(
              "group flex items-center p-3 text-sm md:flex-none md:justify-start md:p-2 md:px-3",
            )}
          >
            <div
              className={clsx(
                "mr-4 h-px w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-300",
                {
                  "w-16": hash === link.href,
                  "bg-slate-300": hash === link.href,
                }
              )}
              ></div>
            <p className={clsx(
              "group-hover:text-slate-300",
              {
                "text-slate-300": hash === link.href,
                "text-slate-400": hash !== link.href,
              }
              )}>{link.name}</p>
          </Link>

          </li>
        );
      })}
    </ul>
  );
}
