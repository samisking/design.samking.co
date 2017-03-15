import React from 'react';
import styles from './Experience.css'

const Point = ({ point }) => <li className={styles.point}>{point}</li>;

const Job = ({ job }) =>
  <div className={styles.job}>
    <h3 className={styles.title}>
      {job.date ? <span className={styles.date}>{job.date} </span> : null}
      {job.role ? <span className={styles.role}>{job.role} </span> : null}
      {job.company ? <span className={styles.at}>@ </span> : null}
      {job.company ? <span className={styles.company}>{job.company}</span> : null}
    </h3>
    {job.points
      ? <ul className={styles.points}>
          {job.points.map(point => <Point key={point} point={point} />)}
        </ul>
      : null
    }
  </div>;

const Experience = ({ experience }) =>
  <div>
    {experience.map(job => <Job key={`${job.date}${job.role}${job.company}`} job={job} />)}
  </div>;

export default Experience;
