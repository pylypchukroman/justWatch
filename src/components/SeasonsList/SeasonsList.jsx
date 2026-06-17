import { Link } from 'react-router-dom';
import styles from './SeasonsList.module.scss';
import noImageLoad from '../../images/no-image-min.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PropTypes from 'prop-types';

const SeasonsList = ({ seasons, serviceId, showId }) => {
  const imageOnErrorHandler = event => {
    event.currentTarget.src = noImageLoad;
  };
  return (
    <ul>
      {seasons &&
        seasons.map(season => (
          <li key={season.id} className={styles.seasonItem}>
            <div className={styles.seasonImgWrapper}>
              <LazyLoadImage
                alt={season.name}
                effect="blur"
                src={`https://image.tmdb.org/t/p/original/${season.poster_path}`}
                onError={imageOnErrorHandler}
                className={styles.img}
              />
            </div>
            <div className={styles.seasonInfo}>
              <Link
                to={`/subscription/${serviceId}/${showId}/${season.season_number}`}
              >
                {season.name}
              </Link>
              <p>Air date: {season.air_date}</p>
              <p>Number of episodes: {season.episode_count}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

SeasonsList.propTypes = {
  seasons: PropTypes.array,
  serviceId: PropTypes.string.isRequired,
  showId: PropTypes.string.isRequired,
};

export default SeasonsList;
