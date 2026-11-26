import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo/logo.svg";
import styles from "./Header.module.css";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/about" },
  { label: "Productos digitales", href: "/productos-digitales" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Ir al inicio">
          <Image src={logo} alt="Logo" width={36} height={36} priority />
        </Link>
        <nav className={styles.nav} aria-label="Principal">
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className={styles.link} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
