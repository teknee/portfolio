import React, { useCallback, useRef } from "react";
import styles from "./Dialog.module.css";
import { Close } from "./Close";

type DialogProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

export const Dialog = ({ trigger, children }: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const openDialog = useCallback(() => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  }, []);

  const closeDialog = useCallback(() => {
    dialogRef.current?.close();
    document.body.style.overflow = "auto";
    triggerRef.current?.focus();
  }, []);
  return (
    <div className={styles.wrapper}>
      <div ref={triggerRef} onClick={openDialog}>
        {trigger}
      </div>
      <dialog ref={dialogRef} className={styles.dialog}>
        <div className={styles.header}>
          <Close onClick={closeDialog} />
        </div>
        <div className={styles.content}>{children}</div>
      </dialog>
    </div>
  );
};
