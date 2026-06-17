import { Link } from 'react-router-dom';
import styles from './SubscribeShowList.module.scss';
import noImageLoad from '../../images/no-image-min.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PropTypes from 'prop-types';

const SubscribeShowList = ({ shows, serviceId }) => {
  const imageOnErrorHandler = event => {
    event.currentTarget.src = noImageLoad;
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
              />
            </div>
            <div className={styles.showText}>
              <Link
                to={`/subscription/${serviceId}/${show.id}`}
                className={styles.title}
              >
                {show.original_name}
              </Link>
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

SubscribeShowList.propTypes = {
  shows: PropTypes.array.isRequired,
  serviceId: PropTypes.string.isRequired,
};

export default SubscribeShowList;
