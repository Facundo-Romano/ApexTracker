import React from "react";
import styles from "./UnderConstruction.module.css"
import icon from "../../media/under.png";

const UnderConstruction = () => {
  return (
    <>
      <div className={styles.underBack}>
        <div className={styles.underBox}>
          <h1>OOPS... THIS PAGE IS</h1>
          <img src={icon} alt="under" height="500px" width="500px" />
        </div>
      </div>
    </>
  );
};

export default UnderConstruction;
