import React from 'react';
import { LazyImage } from '../';
import styles from './Content.css';

const ContentModule = ({ module, children }) => {
  if (module.type === 'heading') {
    if (module.level === 2) {
      return <h2 className={styles.contentWrapper}>{children}</h2>;
    }

    if (module.level === 3) {
      return <h3 className={styles.contentWrapper}>{children}</h3>;
    }

    return <h4 className={styles.contentWrapper}>{children}</h4>;
  }

  if (module.type === 'paragraph') {
    return <p className={styles.contentWrapper}>{children}</p>;
  }

  if (module.type === 'quote') {
    return (
      <div className={styles.contentWrapper}>
        <blockquote className={styles.quote}>{children}</blockquote>
      </div>
    );
  }

  if (module.type === 'link') {
    return <a href={module.url} className={styles.link}>{children}</a>;
  }

  if (module.type === 'image') {
    let imageComponent;
    if (typeof module.src !== 'string') {
      imageComponent = <LazyImage {...module.src} alt={module.alt} />
    } else {
      imageComponent = <img src={module.src} alt={module.alt} />;
    }

    if (module.caption) {
      return (
        <div className={styles.image_withCaption}>
          {imageComponent}
          <p className={styles.caption}>{module.caption}</p>
        </div>
      );
    }

    return (
      <div className={styles.image}>
        {imageComponent}
      </div>
    );
  }

  return <span>{children}</span>;
};

const ContentNode = ({ module }) => {
  // If there are child nodes
  if (Array.isArray(module.text)) {
    return (
      <ContentModule module={module}>
        {module.text.map((childModule, index) =>
          <ContentNode key={index} module={childModule} />
        )}
      </ContentModule>
    );
  }

  return (
    <ContentModule module={module}>
      {module.text}
    </ContentModule>
  );
};

export default ContentNode;
