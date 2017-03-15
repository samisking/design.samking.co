import React from 'react';
import ReactDOM from 'react-dom';
import { debounce } from '../../utils';

const dimensionWatcher = () => WrappedComponent => class DimensionWatcher extends React.Component {
  element = null;
  onResize = debounce(this.onResize, 200);

  state = {
    width: null,
    height: null
  };

  componentDidMount() {
    this.element = ReactDOM.findDOMNode(this);

    this.setDimensions(this.element);
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.setDimensions(this.element);
  }

  setDimensions(element) {
    const rect = element.getBoundingClientRect();

    this.setState({
      width: rect.width,
      height: rect.height
    });
  }

  render() {
    const { width, height } = this.state;

    return (
      <WrappedComponent {...this.props} width={width} height={height} />
    );
  }
};

export default dimensionWatcher;
