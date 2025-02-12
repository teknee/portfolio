import styles from "./Close.module.css";

type CloseProps = {
  onClick?: () => void;
};

export const Close = ({ onClick }: CloseProps) => (
  <button onClick={onClick} className={styles.closeButton} aria-label="Close">
    <svg viewBox="0 0 24 24" className={styles.icon}>
      <line
        x1="18"
        y1="6"
        x2="6"
        y2="18"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="6"
        y1="6"
        x2="18"
        y2="18"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  </button>
);
