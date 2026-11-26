import Image from "next/image";
import Button from "../componentes-base/button/Button";
import ProjectCard from "../componentes-base/cards/ProjectCard";
import styles from "./LandingPage.module.css";

const projects = [
  {
    title: "Caso BCI",
    category: "Banca digital",
    description:
      "Rediseño de la experiencia de productos financieros para clientes digitales.",
    href: "/proyectos/bci",
  },
  {
    title: "Productos digitales",
    category: "UX/UI",
    description:
      "Selección de productos digitales diseñados con foco en usabilidad y accesibilidad.",
    href: "/productos-digitales",
  },
];

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>Diseñadora UX/UI</span>
          <h1 className={styles.title}>
            Diseño experiencias claras, útiles y centradas en las personas.
          </h1>
          <p className={styles.subtitle}>
            Bienvenida a mi portafolio. Aquí encontrarás mis casos de estudio y
            productos digitales.
          </p>
          <div className={styles.actions}>
            <Button href="/proyectos/bci">Ver proyectos</Button>
            <Button href="/about" variant="secondary">
              Sobre mí
            </Button>
          </div>
        </div>
        <div className={styles.heroImage} aria-hidden="true">
          <Image
            src="/hero-placeholder.svg"
            alt=""
            width={480}
            height={360}
            priority
          />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="proyectos-titulo">
        <h2 id="proyectos-titulo" className={styles.sectionTitle}>
          Proyectos destacados
        </h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
