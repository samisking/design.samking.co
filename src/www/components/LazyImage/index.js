import React from 'react';
import dimensionWatcher from '../DimensionWatcher';
import visibilityWatcher from '../VisibilityWatcher';
import styles from './LazyImage.css';

class LazyImage extends React.PureComponent {
  state = {
    isPlaceholder: true,
    isImgLoaded: false,
    currentURL: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  };

  componentDidMount() {
    const { isVisible, width, height, sizes } = this.props;
    this.setImageSize(isVisible, width, height, sizes);
  }

  componentWillReceiveProps(nextProps) {
    const { isVisible, width, height, sizes } = nextProps;
    this.setImageSize(isVisible, width, height, sizes);
  }

  setImageSize(isVisible, width, height, sizes) {
    if (!isVisible || !(width && height)) {
      return;
    }

    const sortedSizes = sizes.sort((a, b) => {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      return 0;
    });

    const nextSizes = sortedSizes.reduce((memo, [srcWidth, url]) => {
      if ((width * 2) <= srcWidth) {
        memo.push(url);
      }

      return memo;
    }, []);

    // If there are no sizes larger than the given width,
    // then set it to the largest size
    if (!nextSizes.length) {
      this.setState({
        currentURL: sizes[sizes.length - 1][1]
      });
    } else {
      this.setState({
        currentURL: nextSizes[0]
      });
    }

    this.setState({
      isPlaceholder: false
    });
  }

  onImgLoad = () => {
    // Don't change the loaded state if it's just a placeholder
    if (this.state.isPlaceholder) {
      return;
    }

    this.setState({
      isImgLoaded: true
    });
  }

  render() {
    return (
      <div
        className={[
          this.props.className ? this.props.className : '',
          this.state.isImgLoaded ? styles.imageWrapper_loaded : styles.imageWrapper
        ].join(' ')}
        style={{
          paddingBottom: `${this.props.ratio * 100}%`
        }}
      >
        <img
          src={this.state.currentURL}
          alt={this.props.alt}
          onLoad={this.onImgLoad}
        />
      </div>
    );
  }
}

export default dimensionWatcher()(visibilityWatcher(100)(LazyImage));
