import React from 'react';
import styles from "./DisplayScreen.module.css";

const DisplayScreen = ({ displayValue }) => {
  return (
    <input
      type="text"
      className={styles.display}
      value={displayValue}
      readOnly
    />
  );
};

export default DisplayScreen;
