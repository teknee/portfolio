import styles from "./Pill.module.css";

type PillProps = {
  children: string;
};

export const Pill = ({ children }: PillProps) => (
  <div className={styles.pill}>{children}</div>
);
