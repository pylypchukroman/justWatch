import styles from './EpisodesList.module.scss';
import noImageLoad from '../../images/no-image-min.png';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PropTypes from 'prop-types';

const EpisodesList = ({ episodes }) => {
  const imageOnErrorHandler = event => {
    event.currentTarget.src = noImageLoad;
  };
  const [watches, setWatches] = useState(1);
  useEffect(() => {
    const number = Math.floor(Math.random() * 100);
    setWatches(number);
  }, []);

  const onWatchBtbClick = () => {
    setWatches(prev => prev + 1);
  };
  return (
    <ul className={styles.list}>
      {episodes &&
        episodes.map(episod => (
          <li key={episod.id} className={styles.episodItem}>
            <div className={styles.imgWrapper}>
              <LazyLoadImage
                alt={episod.name}
                effect="blur"
                src={`https://image.tmdb.org/t/p/original/${episod.still_path}`}
                onError={imageOnErrorHandler}
                className={styles.img}
              />
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.episodTitle}>{episod.name}</p>
              <p>Runtime: {episod.runtime}</p>
              <p>Overview</p>
              <p>{episod.overview}</p>
              <p>
                Vote: {episod.vote_average} ({episod.vote_count} votes)
              </p>
              <p>Watches: {watches}</p>
              <button
                type="button"
                className={styles.watchBtn}
                onClick={onWatchBtbClick}
              >
                Watch
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
};

EpisodesList.propTypes = {
  episodes: PropTypes.array,
};

export default EpisodesList;
