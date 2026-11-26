import Image from "next/image";
import Link from "next/link";
import cashbackResumen from "@/assets/images/bci/cashback-resumen.png";
import fakedoorPantallas from "@/assets/images/bci/fakedoor-pantallas.png";
import canjeParcialImagen from "@/assets/images/bci/canje-parcial.png";
import { caso } from "./bci.data";
import styles from "./BciProject.module.css";

type ResultItem = { valor: string; texto: string; destacado?: boolean };

export default function BciProject() {
  return (
    <article className={styles.page}>
      <Link href="/productos-digitales" className={styles.back}>
        ← {caso.volver}
      </Link>

      <ul className={styles.tags}>
        {caso.tags.map((tag) => (
          <li key={tag} className={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>

      <header className={styles.header}>
        <h1 className={styles.title}>{caso.title}</h1>
        <p className={styles.description}>{caso.description}</p>
      </header>

      <div className={styles.metaBlock}>
        <dl className={styles.meta}>
          {caso.meta.map((item) => (
            <div key={item.label} className={styles.metaItem}>
              <dt className={styles.metaLabel}>{item.label}</dt>
              <dd className={styles.metaValue}>{item.value}</dd>
            </div>
          ))}
        </dl>
        <hr className={styles.divider} />
      </div>

      <section className={styles.contexto} aria-labelledby="contexto-titulo">
        <div className={styles.contextoText}>
          <h2 id="contexto-titulo" className={styles.sectionTitle}>
            {caso.contexto.title}
          </h2>
          {caso.contexto.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className={styles.body}>
              {p}
            </p>
          ))}
        </div>
        <div className={styles.contextoImage}>
          <Image
            src={cashbackResumen}
            alt="Pantalla de cashback disponible en la app de Bci"
            className={styles.phoneSingle}
            sizes="373px"
          />
        </div>
      </section>

      <section className={styles.processBand} aria-labelledby="proceso-titulo">
        <div className={styles.processInner}>
          <h2 id="proceso-titulo" className={styles.processTitle}>
            {caso.proceso.title}
          </h2>
          <div className={styles.etapas}>
            {caso.proceso.etapas.map((etapa) => (
              <div key={etapa.title} className={styles.etapa}>
                <h3 className={styles.etapaTitle}>{etapa.title}</h3>
                {etapa.items.map((item) => (
                  <p key={item.label} className={styles.etapaItem}>
                    <strong>{item.label}:</strong> {item.text}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.fakedoorSection} aria-labelledby="fakedoor-titulo">
        <div className={styles.fakedoorText}>
          <h2 id="fakedoor-titulo" className={styles.sectionTitle}>
            {caso.fakedoor.title}
          </h2>
          {caso.fakedoor.paragraphs.map((p, i) => (
            <p key={i} className={styles.body}>
              {p}
            </p>
          ))}
        </div>
        <div className={styles.centered}>
          <Image
            src={fakedoorPantallas}
            alt="Pantallas del prototipo del fakedoor de canje de cashback"
            className={styles.strip}
            sizes="(max-width: 1000px) 100vw, 1000px"
          />
        </div>
      </section>

      <section className={styles.canjeLayout} aria-labelledby="canje-titulo">
        <div className={styles.canjeText}>
          <span className={styles.canjeTag}>{caso.canjeParcial.tag}</span>
          <h2 id="canje-titulo" className={styles.sectionTitle}>
            {caso.canjeParcial.title}
          </h2>
          {caso.canjeParcial.paragraphs.map((p, i) => (
            <p key={i} className={styles.body}>
              {p}
            </p>
          ))}
        </div>
        <div className={styles.canjeImage}>
          <Image
            src={canjeParcialImagen}
            alt="Pantallas del prototipo de canje parcial: saldos, usar cashback y monto a canjear"
            className={styles.canjeImg}
            sizes="(max-width: 1000px) 100vw, 40vw"
          />
        </div>
      </section>

      <div className={styles.resultsGroup}>
        <section className={styles.resultsBand} aria-labelledby="res-fakedoor">
          <div className={styles.resultsInner}>
            <h2 id="res-fakedoor" className={styles.sectionTitle}>
              {caso.resultadosFakedoor.title}
            </h2>
            <ResultGrid items={caso.resultadosFakedoor.items} />
          </div>
        </section>

        <section className={styles.resultsSection} aria-labelledby="res-guerrilla">
          <h2 id="res-guerrilla" className={styles.sectionTitle}>
            {caso.resultadosGuerrilla.title}
          </h2>
          <ResultGrid items={caso.resultadosGuerrilla.items} />
        </section>
      </div>
    </article>
  );
}

function ResultGrid({ items }: { items: ResultItem[] }) {
  return (
    <div className={styles.results}>
      {items.map((item) => (
        <div
          key={item.valor}
          className={`${styles.resultCard} ${item.destacado ? styles.resultHighlight : ""}`}
        >
          <p className={styles.resultValue}>{item.valor}</p>
          <p className={styles.resultText}>{item.texto}</p>
        </div>
      ))}
    </div>
  );
}
