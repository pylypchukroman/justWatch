import styles from './ShowsList.module.scss';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import noImageLoad from '../../images/no-image-min.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PropTypes from 'prop-types';

const ShowsList = ({ shows, networkName }) => {
  const imageOnErrorHandler = event => {
    event.currentTarget.src = noImageLoad;
  };
  const getInfo = () => {
    Notify.warning(`Please subscribe to ${networkName} to watch this serials`);
  };
  return (
    <ul className={styles.list}>
      {shows &&
        shows.map(show => (
          <li key={show.id} className={styles.item}>
            <div className={styles.image}>
              <LazyLoadImage
                alt={show.name}
                effect="blur"
                src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
                onError={imageOnErrorHandler}
                className={styles.img}
                width="120"
                height="60"
              />
            </div>
            <div className={styles.showText}>
              <p className={styles.title} onClick={getInfo}>
                {show.original_name}
              </p>
              <p className={styles.overview}>{show.overview}</p>
              <div className={styles.rate}>
                <p> Rate: {show.popularity}</p>
                <p className={styles.vote}>
                  Vote: {show.vote_average} ({show.vote_count} votes)
                </p>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

ShowsList.propTypes = {
  shows: PropTypes.array.isRequired,
  networkName: PropTypes.string,
};

export default ShowsList;
