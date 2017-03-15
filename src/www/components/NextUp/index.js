import React from 'react';
import { ProjectList } from '../../components';
import styles from './NextUp.css';

const NextUp = ({ projectList, currentSlug }) => {
  const currIndex = projectList.findIndex(p => p.slug === currentSlug);

  const list = [
    ...projectList.slice(currIndex + 1, projectList.length),
    ...projectList.slice(0, currIndex)
  ];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.nextUp}>Next up</h2>
      <ProjectList projects={list} />
    </div>
  );
};

export default NextUp;
