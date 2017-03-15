import { getJSON } from 'sk-fetch-wrapper/lib/json';

const makeRequest = ({ request, action, fallback }) => (dispatch,  getState) => {
  if (getState().requestHistory.includes(request)) {
    return Promise.resolve(fallback);
  }

  dispatch({ type: 'ADD_REQUEST', request });

  return getJSON(request)
    .then(data => {
      dispatch({ type: action, data });
      dispatch({ type: 'DEL_REQUEST', request });
      return data;
    });
};

const getPage = slug => (dispatch, getState) => {
  return dispatch(makeRequest({
    request: `/api/pages/${slug}.json`,
    action: 'RECEIVE_PAGE',
    fallback: getState().pages[slug]
  }));
};

const getProject = slug => (dispatch, getState) => {
  return dispatch(makeRequest({
    request: `/api/projects/${slug}.json`,
    action: 'RECEIVE_PROJECT',
    fallback: getState().projects[slug]
  }));
};

const getProjectList = () => (dispatch, getState) => {
  return dispatch(makeRequest({
    request: `/api/projects/index.json`,
    action: 'RECEIVE_PROJECT_LIST',
    fallback: getState().projectList
  }));
};

const effects = {
  getPage,
  getProject,
  getProjectList
};

export default effects;
