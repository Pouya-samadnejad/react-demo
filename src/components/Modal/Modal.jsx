import styles from "@/components/Modal/Modal.module.css";
function Modal({ children, visibleModal }) {
  return (
    <div>
      <>
        <div className={styles.backdrop} onClick={visibleModal} />
        <dialog open className={styles.modal}>
          {children}
        </dialog>
      </>
    </div>
  );
}

export default Modal;
