import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  skills: string[];
}