import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom';
import { store } from './state';
import App from './screens/App';

// The element to render the client side app into
const container = document.getElementById('app');

// Render the client side app
const renderApp = (AppComponent) => {
  render(
    <Provider store={store}>
      <AppContainer>
        <BrowserRouter>
          <AppComponent />
        </BrowserRouter>
      </AppContainer>
    </Provider>,
    container
  );
};

if (module.hot) {
  // require('preact/devtools');
  module.hot.accept('./screens/App', () => {
    const NextApp = require('./screens/App').default;
    renderApp(NextApp);
  });
}

renderApp(App);
