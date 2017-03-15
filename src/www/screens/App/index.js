import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import routes from '../../routes';
import {
  functional,
  RouteWithSubRoutes,
  LoadingBar,
  BrandBar,
  Footer
} from '../../components';

// Import any global CSS before the routes to preserve CSS order
import '../../css/Global.css';
import styles from './App.css';

// Handle scroll based on location
// (srt, str, str) => null
export const scrollHandler = (prev, next, action) => {
  // Scroll to top on new routes
  // Reset page titles too just in case
  if (prev !== next && action === 'PUSH') {
    window.scrollTo(0, 0);
  }
};

const App = ({ dispatch, loading, title }) =>
  <div className={styles.app}>
    <LoadingBar loading={loading} />
    <BrandBar title={title} />

    {routes.map(route =>
      <RouteWithSubRoutes
        key={route.path}
        dispatch={dispatch}
        {...route}
      />
    )}

    <Footer />
  </div>;

const syncPathWithStore = (dispatch, location) =>
  dispatch({ type: 'SET_PATH', path: location.pathname });

const willMount = ({ dispatch, location }) =>
  syncPathWithStore(dispatch, location);

const willReceiveProps = (next, curr) => {
  const nextPath = next.location.pathname;
  const currPath = curr.location.pathname;
  const action = curr.history.action;

  // Do whatever we want with scroll position
  scrollHandler(currPath, nextPath, action);

  if (nextPath !== currPath) {
    syncPathWithStore(curr.dispatch, next.location);
  }
};

const mapStateToProps = (state) => ({
  title: state.title,
  loading: state.requests.length > 0
});

export default withRouter(connect(mapStateToProps)(
  functional({ willMount, willReceiveProps })(App)
));
