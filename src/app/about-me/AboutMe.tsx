import Image from "next/image";
import Button from "../componentes-base/button/Button";
import Icon from "../componentes-base/icon/Icon";
import profile from "@/assets/images/profile.webp";
import { EMAIL, LINKEDIN_URL, certifications, education, experience } from "./aboutMe.data";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  const years = 8;

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>Ligia Cautela - Product designer senior</p>
          <h1 className={styles.title}>Diseño de productos digitales con objetivos</h1>
          <p className={styles.intro}>
            Soy Product Designer con {years} años de experiencia y conocimientos en Frontend.
            He trabajado en empresas como Bci, Caja Los Andes, Cencosud y LATAM, creando
            productos digitales que equilibran usabilidad, estética, negocio y viabilidad
            técnica. Integro IA en mis procesos de investigación y diseño para acelerar la
            exploración, y la entregas.
          </p>

          <ul className={styles.contact}>
            <li className={styles.contactItem}>
              <Icon name="home" />
              <span>Santiago de Chile</span>
            </li>
            <li className={styles.contactItem}>
              <Icon name="linkedin" />
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                /in/ligiaelenacautela/
              </a>
            </li>
            <li className={styles.contactItem}>
              <Icon name="mail" />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li className={styles.contactItem}>
              <Icon name="download" />
              <a href="#" aria-disabled="true">
                Descargar CV
              </a>
            </li>
          </ul>

          <div className={styles.actions}>
            <Button href={LINKEDIN_URL}>Hablemos por Linkedin</Button>
          </div>
        </div>

        <div className={styles.heroImage}>
          <Image
            src={profile}
            alt="Retrato de Ligia Cautela"
            width={503}
            height={564}
            priority
            sizes="(max-width: 900px) 80vw, 503px"
          />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="experiencia-titulo">
        <h2 id="experiencia-titulo" className={styles.sectionTitle}>
          {years} años de experiencia
        </h2>
        <ul className={styles.experienceList}>
          {experience.map((item) => (
            <li key={`${item.company}-${item.period}`} className={styles.experienceRow}>
              <span className={styles.company}>{item.company}</span>
              <span className={styles.role}>{item.role}</span>
              <span className={styles.period}>{item.period}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="educacion-titulo">
        <h2 id="educacion-titulo" className={styles.sectionTitle}>
          Educación y Certificaciones
        </h2>

        <ul className={styles.educationList}>
          {education.map((item) => (
            <li key={item.title} className={styles.educationItem}>
              <p className={styles.educationTitle}>{item.title}</p>
              <p>{item.institution}</p>
            </li>
          ))}
        </ul>

        <hr className={styles.divider} />

        <ul className={styles.certList}>
          {certifications.map((item) => (
            <li key={item} className={styles.certItem}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
