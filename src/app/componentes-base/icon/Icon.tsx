import styles from "./Icon.module.css";

export type IconName =
  | "home"
  | "mail"
  | "linkedin"
  | "download"
  | "chevron-down"
  | "menu"
  | "close";

type IconProps = {
  name: IconName;
  size?: number;
};

const paths: Record<IconName, React.ReactNode> = {
  home: <path d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" stroke="none" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" stroke="#ffffff" strokeWidth="2" />
    </>
  ),
  download: <path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  // Material Design: icono "menu" (tres barras)
  menu: (
    <path
      d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
      fill="currentColor"
      stroke="none"
    />
  ),
  // Material Design: icono "close"
  close: (
    <path
      d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      fill="currentColor"
      stroke="none"
    />
  ),
};

export default function Icon({ name, size = 20 }: IconProps) {
  return (
    <svg
      className={styles.icon}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
