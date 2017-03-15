import React from 'react';
import ReactDOM from 'react-dom';
import { debounce } from '../../utils';

const visibilityWatcher = (
  offset = 0,
  once = true,
  interval = 1000 / 60
) => WrappedComponent => class VisibilityWatcher extends React.Component {
  tick = null;
  element = null;
  onResize = debounce(this.onResize, 200);

  state = {
    isVisible: false
  };

  componentDidMount() {
    this.element = ReactDOM.findDOMNode(this);
    this.loop(this.element);
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    clearTimeout(this.tick);
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.loop(this.element);
  }

  loop(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    let isVisible = false;

    if (rect.bottom >= 0 && rect.top <= (windowHeight + offset)) {
      isVisible = true;
    }

    if (isVisible) {
      this.setState({ isVisible });
    }

    if (isVisible && once) {
      clearTimeout(this.tick);
    } else {
      this.tick = setTimeout(() => {
        this.loop(this.element);
      }, interval);
    }
  }

  render() {
    return (
      <WrappedComponent {...this.props} isVisible={this.state.isVisible} />
    );
  }
};

export default visibilityWatcher;
