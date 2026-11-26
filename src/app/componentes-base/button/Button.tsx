import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  ariaLabel?: string;
};

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  onClick,
  ariaLabel,
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          className={className}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link className={className} href={href} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
