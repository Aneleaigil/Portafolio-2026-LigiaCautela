import type { StaticImageData } from "next/image";
import type { CardTone } from "../componentes-base/cards/ProjectCard";
import bciImage from "@/assets/images/projects/bci-cashback.png";
import selloImage from "@/assets/images/projects/sello-lena.png";
import trabajosImage from "@/assets/images/projects/trabajos-en-obra.png";
import asignacionImage from "@/assets/images/projects/asignacion-familiar.png";
import latamImage from "@/assets/images/projects/latam-autoinscripcion.png";
import cencosudImage from "@/assets/images/projects/cencosud-tickets.png";
import smartflyImage from "@/assets/images/projects/smartfly-app.png";
import totemImage from "@/assets/images/projects/totem-kiosco.png";

export type Project = {
  title: string;
  client: string;
  year: string;
  tone: CardTone;
  /** Ruta del caso: la tarjeta completa es un enlace a esta ruta */
  href: string;
  /** null mientras falta el asset de la captura del proyecto */
  image: StaticImageData | null;
  imageAlt: string;
  /** Muestra "Ir al Caso" (solo en las tarjetas destacadas) */
  showCta?: boolean;
};

/** Los dos primeros proyectos son destacados (tarjetas anchas con "Ir al Caso"). */
export const featuredProjects: Project[] = [
  {
    title: "Canje de cashback app beneficios bci",
    client: "Bci",
    year: "2025",
    tone: "mint",
    href: "/proyectos/bci",
    image: bciImage,
    imageAlt: "Pantallas de la app de beneficios de Bci",
    showCta: true,
  },
  {
    title: "Nuevo sistema para el programa Sello de la Leña",
    client: "Agencia de Sostenibilidad Energetica",
    year: "2024 -2025",
    tone: "mint",
    href: "/proyectos/sello-calidad-lena",
    image: selloImage,
    imageAlt: "Pantalla del sistema Sello Calidad de Leña",
    showCta: true,
  },
];

export const projects: Project[] = [
  {
    title: "Nuevo portal de empleos sitio privado",
    client: "Cámara Chilena De La Construcción (CCHC)",
    year: "2023 -2024",
    tone: "lavender",
    href: "/proyectos/portal-empleos-cchc",
    image: trabajosImage,
    imageAlt: "Portal de empleos Trabajos en Obra",
  },
  {
    title: "Rediseño web Asignación Familiar",
    client: "Caja los Andes",
    year: "2023 -2024",
    tone: "gray",
    href: "/proyectos/asignacion-familiar",
    image: asignacionImage,
    imageAlt: "Sitio web de Asignación Familiar",
  },
  {
    title: "Rediseño software del Totem",
    client: "Caja Los Andes",
    year: "2022 -2024",
    tone: "mint",
    href: "/proyectos/totem-caja-los-andes",
    image: totemImage,
    imageAlt: "Tótem de autoatención",
  },
  {
    title: "App y sitio web de Smartfly",
    client: "Smartfly",
    year: "2022",
    tone: "dark",
    href: "/proyectos/smartfly",
    image: smartflyImage,
    imageAlt: "App y sitio web de Smartfly en celulares",
  },
  {
    title: "Sistema de gestión de tickets",
    client: "Cencosud",
    year: "2021 - 2022",
    tone: "gray",
    href: "/proyectos/tickets-cencosud",
    image: cencosudImage,
    imageAlt: "Sistema de gestión de tickets en laptop",
  },
  {
    title: "App reconocimiento facial Latam Biometrics Brasil",
    client: "Latam",
    year: "2021",
    tone: "pink",
    href: "/proyectos/latam-biometrics",
    image: latamImage,
    imageAlt: "Pantalla de autoinscripción LATAM en tablet",
  },
];
