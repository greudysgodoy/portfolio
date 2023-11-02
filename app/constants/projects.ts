import totemMenu from "../../public/images/totem-menu.png";
import nestJs from "../../public/images/nestjs.png";
import obed from "../../public/images/obed.png";
import chitrack from "../../public/images/chitrack.png";
import ctaCaracas from "../../public/images/cta-caracas.png";
export const projects = [
  {
    id: "1",
    title: "Chilquinta Totem",
    description:
      "Aplicación desktop para tótem de autoatención en oficinas de Chilquinta Energía. Desarrollada utilizando electron y nuxt. Permite a los clientes realizar pagos, solicitar servicios y realizar consultas.",
    image: totemMenu,
    skills: [
      "Vue",
      "Nuxt",
      "Electron",
      "Nodejs",
      "Fastify",
      "Docker",
      "DotNet",
      "Jenkins",
      "Elasticsearch",
      "Git",
    ],
  },
  {
    id: "2",
    title: "SSTT Walmart",
    description:
      "Sistema de servicio técnico para Walmart Chile. Gestiona las solicitudes de reparaciones de productos en garantía y fuera de garantía.",
    image: nestJs,
    skills: [
      "NestJS",
      "NextJS",
      "Nodejs",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Kitt",
      "Git",
    ],
  },
  {
    id: "3",
    title: "CTA Caracas",
    description:
      "Sistema de gestión y seguimiento de jugadores de tenis de la asociación de tenis de Caracas. Permite administrar información de las temporadas, partidos, ver resultados, ver ranking entre otros.",
    image: ctaCaracas,
    skills: [
      "SailsJS",
      "Python",
      "MySql",
      "Docker",
      "GitLab CI/CD",
      "Git",
    ],
  },
  {
    id: "4",
    title: "Chitrack",
    description:
      "Aplicación de apoyo a conductores optimizando la gestión de entregas y rutas de forma fácil e intuitiva",
    image: chitrack,
    skills: [
      "React",
      "Python",
      "PostgreSQL",
      "Docker",
      "Google Maps API",
      "CircleCI",
      "Git",
    ],
  },
  {
    id: "5",
    title: "Inversiones y variedades Obed",
    description:
      "Aplicación de búsqueda de productos y actualización de precios para la empresa Inversiones y variedades Obed",
    image: obed,
    skills: [
      "NextJS",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "Vercel",
      "Git",
    ],
  },
];