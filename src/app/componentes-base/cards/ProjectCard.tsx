import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";

export type CardTone = "mint" | "lavender" | "gray" | "pink" | "dark";

type ProjectCardProps = {
  title: string;
  client: string;
  year: string;
  tone: CardTone;
  image?: StaticImageData | null;
  imageAlt?: string;
  href?: string;
};

export default function ProjectCard({
  title,
  client,
  year,
  tone,
  image,
  imageAlt = "",
  href,
}: ProjectCardProps) {
  const toneClass = styles[tone];

  return (
    <article className={`${styles.card} ${toneClass}`}>
      <div className={styles.media}>
        {image ? (
          <Image src={image} alt={imageAlt} className={styles.image} sizes="(max-width: 600px) 90vw, 33vw" />
        ) : (
          <div className={styles.placeholder} aria-hidden="true" />
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.meta}>Cliente: {client}</p>
        <p className={styles.meta}>Año: {year}</p>
        {href && (
          <Link className={styles.cta} href={href}>
            Ir al Caso <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </article>
  );
}
