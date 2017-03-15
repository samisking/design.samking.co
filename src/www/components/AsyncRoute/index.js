import React from 'react';
import { Spinner } from '../';
import styles from './AsyncRoute.css';

const asyncRoute = getComponent => class AsyncComponent extends React.Component {
  static Component = null;
  name = `AsyncComponent:${Math.random().toString(36).substr(2, 8)}`;
  mounted = false;

  state = {
    Component: AsyncComponent.Component
  };

  componentWillMount() {
    if (this.state.Component === null) {
      if (this.props.dispatch) {
        this.props.dispatch({ type: 'ADD_REQUEST', request: this.name });
      }

      getComponent().then(m => m.default).then(Component => {
        AsyncComponent.Component = Component;
        if (this.mounted) {
          if (this.props.dispatch) {
            this.props.dispatch({ type: 'DEL_REQUEST', request: this.name });
          }

          this.setState({ Component });
        }
      })
    }
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { Component } = this.state;

    return (
      <div className={styles.container}>
        {Component
          ? <Component {...this.props} />
          : <Spinner withWrapper={true} />
        }
      </div>
    );
  }
};

export default asyncRoute;
