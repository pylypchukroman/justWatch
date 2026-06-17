import styles from './SerialInfo.module.scss';
import noImageLoad from '../../images/no-image-min.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PropTypes from 'prop-types';

const SerialInfo = ({ serial }) => {
  const airdate = serial.first_air_date;
  const year = airdate ? airdate.split('-')[0] : null;
  const ganres = serial.genres;
  const ganre = ganres ? ganres.map(el => el.name).join(', ') : null;

  const imageOnErrorHandler = event => {
    event.currentTarget.src = noImageLoad;
  };
  return (
    <div className={styles.info}>
      <div className={styles.imgWrapper}>
        <LazyLoadImage
          alt={serial.name}
          effect="blur"
          src={`https://image.tmdb.org/t/p/original/${serial.poster_path}`}
          onError={imageOnErrorHandler}
          className={styles.img}
        />
      </div>
      <div className={styles.textWrapper}>
        <p>
          <span className={styles.title}>{serial.original_name}</span> {year}
        </p>
        <p>{ganre}</p>
        <p className={styles.tag}>{serial.tagline}</p>
        <p>Overview</p>
        <p className={styles.overview}>{serial.overview}</p>
        <a href={serial.homepage}>{serial.homepage}</a>
        <p className={styles.seasons}>
          Number of seasons: {serial.number_of_seasons}
        </p>
        <p>Number of episodes: {serial.number_of_episodes}</p>
      </div>
    </div>
  );
};

SerialInfo.propTypes = {
  serial: PropTypes.object.isRequired,
};

export default SerialInfo;
