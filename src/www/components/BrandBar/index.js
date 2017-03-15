import React from 'react';
import { Link } from 'react-router-dom';
import throttle from 'raf-throttle';
import styles from './BrandBar.css';

const BrandBarComponent = ({
  title,
  barOffset,
  barOffsetRatio,
  titleOffset
}) => {
  const barStyle = {
    transform: `translate3d(0, -${barOffset}px, 0)`,
    boxShadow: `0 0 ${barOffsetRatio * 2}em rgba(133, 136, 146, ${barOffsetRatio / 5})`
  };

  const titleStyle = {
    transform: `translate3d(0, ${titleOffset}px, 0)`
  };

  return (
    <div className={styles.brand} style={barStyle}>
      <div className={styles.brand_wrapper}>
        {title
          ? <span className={styles.brand_title} style={titleStyle}>{title}</span>
          : <span></span>
        }
        <Link to='/' className={styles.brand_link}>design.samking.co</Link>
      </div>
    </div>
  );
};

class BrandBar extends React.PureComponent {
  tick = null;
  loop = throttle(this.loop);

  initialScroll = (window && window.scrollY) || 0;
  minBarScroll = 28;
  titleHeight = 34;
  titlePopInStart = this.minBarScroll + this.titleHeight + 12;
  titlePopInEnd = this.titlePopInStart + this.titleHeight;
  scrollState = this.getStateFromScroll(this.initialScroll);

  state = {
    currScroll: this.initialScroll,
    ...this.scrollState
  };

  componentDidMount() {
    this.loop();
  }

  componentWillUnmount() {
    clearTimeout(this.tick);
  }

  getStateFromScroll(currScroll) {
    const isScrolled = currScroll > this.minBarScroll || false;
    const barOffset = isScrolled ? this.minBarScroll : currScroll;
    const barOffsetRatio = isScrolled ? 1 : currScroll / this.minBarScroll;

    let titleOffset = this.titleHeight;
    if (currScroll < this.titlePopInStart) {
      titleOffset = this.titleHeight;
    } else if (currScroll > this.titlePopInEnd) {
      titleOffset = 0;
    } else {
      titleOffset = this.titlePopInEnd - currScroll;
    }

    return {
      barOffset,
      barOffsetRatio,
      titleOffset
    };
  }

  loop = () => {
    const scroll = window && window.scrollY;
    const newState = this.getStateFromScroll(scroll);
    this.setState(newState);

    this.tick = setTimeout(() => {
      this.loop();
    }, 1000 / 60);
  }

  render() {
    return (
      <BrandBarComponent
        {...this.props}
        {...this.state}
      />
    );
  }
}

export default BrandBar;
