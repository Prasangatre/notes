import React from 'react'
import styles from './cutsom.module.css'
const CustomModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={onClose}>
  X
          </button>
          <div  className={styles.modalContent}>{children}</div>
        </div>
      </div>
    );
}

export default CustomModal