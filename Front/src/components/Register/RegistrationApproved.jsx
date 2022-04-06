import React from "react";
import ReactDom from "react-dom";
import styles from "./RegistrationApproved.module.css";

export default function RegistrationApproved({ resetApproved, closeModal }) {
    const reset = () => {
        resetApproved()
        closeModal()
    };

  return ReactDom.createPortal(
      <>
        <div className={styles.background}/>
        <div className={styles.modal}>
            <h1>A confirmation email has been sent</h1>
            <button onClick={() => reset()}>X</button>
        </div>
      </>,
    document.getElementById("portal")
  )
};