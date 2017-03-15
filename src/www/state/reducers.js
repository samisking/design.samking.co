import initialState from './state';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return {
        ...state,
        title: action.title
      };

    case 'SET_PATH':
      return {
        ...state,
        currentPath: action.path
      };

    case 'ADD_REQUEST':
      return {
        ...state,
        requests: [...state.requests, action.request],
        requestHistory: [...state.requestHistory, action.request]
      };

    case 'DEL_REQUEST':
      return {
        ...state,
        requests: state.requests.filter(r => r !== action.request)
      };

    case 'RECEIVE_PAGE':
      return {
        ...state,
        pages: {
          ...state.pages,
          [action.data.slug]: action.data
        }
      };

    case 'RECEIVE_PROJECT':
      return {
        ...state,
        projects: {
          ...state.projects,
          [action.data.slug]: action.data
        }
      };

    case 'RECEIVE_PROJECT_LIST':
      return {
        ...state,
        projectList: action.data
      };

    default:
      return state;
  }
};
