import React from 'react';
import { connect } from 'react-redux';
import { effects } from '../../state';
import { functional, Content, ProjectList, Experience, Spinner } from '../../components';
import styles from './Home.css';

const Home = ({ page, projects }) => {
  if (!page) {
    return <Spinner withWrapper={true} />
  }

  return (
    <div>
      <div className={styles.section_flush}>
        <h1 className={styles.content}>{page.title}</h1>
        {page.content.map((module, index) =>
          <Content key={index} module={module} />
        )}
      </div>

      <div className={styles.section}>
        <h2>Select Projects</h2>
        <ProjectList projects={projects} withImages={true} />
      </div>

      <div className={styles.section}>
        <h2>Experience</h2>
        <Experience experience={page.experience} />
      </div>
    </div>
  );
}

const willMount = ({ dispatch }) => {
  dispatch({ type: 'SET_TITLE', title: 'Sam King' });
  dispatch(effects.getPage('home'));
  dispatch(effects.getProjectList());
};

const mapStateToProps = (state) => ({
  page: state.pages.home,
  projects: state.projectList
});

export default connect(mapStateToProps)(functional({ willMount })(Home));
