import Button from "../button/Button";
import Icon from "../icon/Icon";
import styles from "./Footer.module.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/ligiaelenacautela/";
const EMAIL = "ligiaelena11@gmail.com";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <h2 className={styles.title}>¿Conversamos sobre tu próximo producto?</h2>

        <div className={styles.actions}>
          <Button href={LINKEDIN_URL}>Hablemos por Linkedin</Button>
          <Button href={`mailto:${EMAIL}`} variant="secondary">
            Escribe un correo
          </Button>
        </div>

        <ul className={styles.contact}>
          <li className={styles.contactItem}>
            <Icon name="home" />
            <span>Santiago de Chile</span>
          </li>
          <li className={styles.contactItem}>
            <Icon name="mail" />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
