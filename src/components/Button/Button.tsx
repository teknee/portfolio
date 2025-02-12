import React from "react";
import styles from "./Button.module.css";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
};

export const Button = ({
  children,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) => (
  <button
    onClick={onClick}
    type={type}
    className={styles.button}
    disabled={disabled}
  >
    {children}
  </button>
);
