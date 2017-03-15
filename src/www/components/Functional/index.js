import React from 'react';

const noop = () => {};

const functional = ({
  willMount = noop,
  didMount = noop,
  willUnmount = noop,
  willReceiveProps = noop
}) => WrappedComponent => class extends React.PureComponent {
  componentWillMount() {
    willMount(this.props);
  }

  componentDidMount() {
    didMount(this.props);
  }

  componentWillUnmount() {
    willUnmount(this.props);
  }

  componentWillReceiveProps(next) {
    willReceiveProps(next, this.props);
  }

  render() {
    return (
      <WrappedComponent {...this.props} />
    );
  }
};

export default functional;
