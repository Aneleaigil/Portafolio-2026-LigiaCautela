import ProjectCard from "../componentes-base/cards/ProjectCard";
import { featuredProjects, projects } from "./digitalProducts.data";
import styles from "./DigitalProducts.module.css";

export default function DigitalProducts() {
  return (
    <div className={styles.page}>
      <section className={styles.intro}>
        <h1 className={styles.title}>
          Diseño productos digitales que se ven bien, funcionan como deben y se validan con datos.
        </h1>
        <p className={styles.lead}>
          Product Designer senior con +7 años en banca, retail, aerolíneas y sector público.
          Integro IA para investigar, prototipar y validar más rápido, y conozco el frontend que
          da vida a mis diseños.
        </p>
      </section>

      <section className={styles.section} aria-labelledby="proyectos-titulo">
        <h2 id="proyectos-titulo" className={styles.sectionTitle}>
          Proyectos seleccionados
        </h2>
        <hr className={styles.divider} />

        <div className={styles.featuredGrid}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
