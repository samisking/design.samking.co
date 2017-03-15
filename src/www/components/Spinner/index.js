import React from 'react';
import styles from './Spinner.css';

const Spinner = ({ withWrapper }) => {
  if (withWrapper) {
    return <div className={styles.spinnerWrapper}><div className={styles.spinner} /></div>;
  }

  return <div className={styles.spinner} />;
};

export default Spinner;
