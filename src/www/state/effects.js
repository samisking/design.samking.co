import { getJSON } from 'sk-fetch-wrapper/lib/json'

const getPage = (slug) => (dispatch, getState) => {
  const request = `/api/pages/${slug}.json`;

  if (getState().requestHistory.includes(request))
    return Promise.resolve(getState().pages[slug]);

  dispatch({ type: 'ADD_REQUEST', request });

  return getJSON(request)
    .then(page => {
      dispatch({ type: 'RECEIVE_PAGE', slug, page });
      dispatch({ type: 'DEL_REQUEST', request });
      return page;
    });
};

const getProject = (slug) => (dispatch, getState) => {
  const request = `/api/projects/${slug}.json`;

  if (getState().requestHistory.includes(request))
    return Promise.resolve(getState().projects[slug]);

  dispatch({ type: 'ADD_REQUEST', request });

  return getJSON(request)
    .then(project => {
      dispatch({ type: 'RECEIVE_PROJECT', slug, project });
      dispatch({ type: 'DEL_REQUEST', request });
      return project;
    });
};

const getProjectList = () => (dispatch, getState) => {
  const request = `/api/projects/index.json`;

  if (getState().requestHistory.includes(request))
    return Promise.resolve(getState().projectList);

  dispatch({ type: 'ADD_REQUEST', request });

  return getJSON(request)
    .then(projects => {
      dispatch({ type: 'RECEIVE_PROJECT_LIST', projects });
      dispatch({ type: 'DEL_REQUEST', request });
      return projects;
    });
};

const effects = {
  getPage,
  getProject,
  getProjectList
};

export default effects;
