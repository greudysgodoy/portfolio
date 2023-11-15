import { SocialMedia } from "../interfaces/social-media.interface";

import whatsapp from "../../public/images/whatsapp.svg";
import linkedIn from "../../public/images/linkedin.svg";
import github from "../../public/images/github.svg";


export const socialMedia : SocialMedia[]  = [
  {
    id: "1",
    link: "https://wa.me/584120576183",
    image: whatsapp,
  },
  {
    id: "2",
    link: "https://www.linkedin.com/in/greudysgodoy/",
    image: linkedIn,
  },
  {
    id: "3",
    link: "https://github.com/greudysgodoy",
    image: github,
  },
];
