import React from 'react';
import { connect } from 'react-redux';
import { effects } from '../../state';
import { functional, Content, NextUp, Spinner } from '../../components';
import styles from './Project.css';

const Project = ({ project, projects, match }) => {
  const slug = match.params.projectSlug;

  if (!project) {
    return <Spinner withWrapper={true} />;
  }

  return (
    <div>
      <div className={styles.details}>
        <h1>{project.title}</h1>
        <blockquote className={styles.intro}>{project.intro}</blockquote>
        {project.link
          ? <p><a href={project.link.url}>{project.link.text}</a></p>
          : null
        }
      </div>

      {project.content.map((module, index) =>
        <Content key={index} module={module} />
      )}

      <NextUp projectList={projects} currentSlug={slug} />
    </div>
  );
};

const loadProject = (dispatch, slug) => {
  dispatch(effects.getProject(slug)).then(project => {
    dispatch({ type: 'SET_TITLE', title: project.title });
  });

  dispatch(effects.getProjectList());
};

const willMount = ({ dispatch, match }) => {
  loadProject(dispatch, match.params.projectSlug);
};

const willReceiveProps = ({ dispatch, match, currentPath: nextPath }, { currentPath }) => {
  if (nextPath !== currentPath) {
    loadProject(dispatch, match.params.projectSlug);
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentPath: state.currentPath,
    project: state.projects[ownProps.match.params.projectSlug],
    projects: state.projectList
  }
};

export default connect(mapStateToProps)(functional({ willMount, willReceiveProps })(Project));
