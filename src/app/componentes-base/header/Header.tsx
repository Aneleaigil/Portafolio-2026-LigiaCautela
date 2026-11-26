"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Icon from "../icon/Icon";
import logo from "@/assets/logo/logo.png";
import styles from "./Header.module.css";

const navItems = [
  { label: "Productos digitales", href: "/productos-digitales" },
  { label: "Proyectos Frontend-IA", href: "/proyectos-frontend-ia" },
  { label: "Acerca de mi", href: "/about" },
];

type Language = "es" | "en";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("es");

  const closeMenu = () => setMenuOpen(false);
  const languageLabel = language === "es" ? "Español" : "English";

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <Link href="/" className={styles.brand} aria-label="Ir al inicio" onClick={closeMenu}>
            <Image src={logo} alt="" width={59} height={36} priority />
            <span className={styles.brandName}>Ligia Cautela</span>
          </Link>

          <button
            type="button"
            className={styles.menuButton}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="menu-principal"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={28} />
          </button>
        </div>

        <div
          id="menu-principal"
          className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}
        >
          <nav className={styles.nav} aria-label="Principal">
            <ul className={styles.list}>
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href === "/productos-digitales" && pathname === "/");
                return (
                  <li key={item.href}>
                    <Link
                      className={`${styles.link} ${isActive ? styles.active : ""}`}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.lang}>
            <button
              type="button"
              className={styles.langButton}
              aria-label={`Idioma actual: ${languageLabel}. Cambiar idioma`}
              onClick={() => setLanguage((current) => (current === "es" ? "en" : "es"))}
            >
              <span>{languageLabel}</span>
              <Icon name="chevron-down" size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
