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
    if (href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          className={className}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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
    <button className={className} type={type} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
