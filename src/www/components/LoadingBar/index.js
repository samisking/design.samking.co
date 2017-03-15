import React from 'react';
import styles from './LoadingBar.css';

const LoadingBar = ({ loading }) => {
  const className = loading ? styles.bar_loading : styles.bar;
  return <div className={className} />;
};

export default LoadingBar;
