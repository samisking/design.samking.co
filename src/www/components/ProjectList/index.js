import React from 'react';
import { Link } from 'react-router-dom';
import { LazyImage, Spinner } from '../';
import styles from './ProjectList.css';

const ProjectList = ({ projects, withImages }) => {
  if (projects.length === 0) {
    return <Spinner withWrapper={true} />;
  }

  return (
    <div>
      {projects.map(project =>
        <div className={styles.project} key={project.slug}>
          {withImages ?
            <Link to={`/${project.slug}`} className={styles.image}>
              <LazyImage {...project.cover} alt={project.title} />
            </Link>
            : null
          }

          <Link to={`/${project.slug}`}>
            <h3 className={styles.title}>{project.title}</h3>
          </Link>
          <span className={styles.subtitle}>{project.subtitle}</span>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
