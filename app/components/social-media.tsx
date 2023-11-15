import Link from "next/link";
import Image from "next/image";
import { SocialMedia } from "../interfaces/social-media.interface";

interface Props {
  links: SocialMedia[];
}

export default function SocialMedia({ links }: Props) {
  return (
    <ul className="flex items-center">
      {links.map((item) => {
        return (
          <li key={item.id}>
            <Link
              href={item.link}
              className="group flex items-center p-3 text-sm"
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Image
                  src={item.image}
                  alt={item.id}
                  className="rounded-lg text-slate-100"
                  style={{color: 'white'}}
                  width={30}
                />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
