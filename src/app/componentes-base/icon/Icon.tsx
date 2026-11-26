import styles from "./Icon.module.css";

export type IconName = "home" | "mail" | "linkedin" | "download" | "chevron-down";

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
