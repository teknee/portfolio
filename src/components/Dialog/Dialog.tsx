import React, { useRef } from "react";
import styles from "./Dialog.module.css";

type DialogProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

export const Dialog = ({ trigger, children }: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.wrapper}>
      <div ref={triggerRef} onClick={() => dialogRef.current?.showModal()}>
        {trigger}
      </div>
      <dialog ref={dialogRef} className={styles.dialog}>
        <button
          className={styles.closeButton}
          onClick={() => dialogRef.current?.close()}
        >
          Close
        </button>
        {children}
      </dialog>
    </div>
  );
};
