import Link from "next/link";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  href: string;
};

export default function ProjectCard({
  title,
  category,
  description,
  href,
}: ProjectCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <span className={styles.category}>{category}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.cta}>Ver caso →</span>
    </Link>
  );
}
