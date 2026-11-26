"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "../icon/Icon";
import logo from "@/assets/logo/logo.png";
import styles from "./Header.module.css";

const navItems = [
  { label: "Proyectos UX/UI", href: "/productos-digitales" },
  { label: "Proyectos Frontend-IA", href: "/proyectos-frontend-ia" },
  { label: "Acerca de mi", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Ir al inicio">
          <Image src={logo} alt="" width={59} height={36} priority />
          <span className={styles.brandName}>Ligia Cautela</span>
        </Link>

        <nav className={styles.nav} aria-label="Principal">
          <ul className={styles.list}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    className={`${styles.link} ${isActive ? styles.active : ""}`}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.lang}>
          <button type="button" className={styles.langButton} aria-label="Cambiar idioma">
            <span>Español</span>
            <Icon name="chevron-down" size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
