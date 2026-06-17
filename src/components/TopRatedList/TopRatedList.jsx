import { useEffect, useState } from 'react';
import styles from './TopRatedList.module.scss';
import noImageLoad from '../../images/no-image-min.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { getMostViewedShowsOfYear } from 'Utils/MovieAPI';

const TopRatedList = () => {
  const imageOnErrorHandler = event => {
    event.currentTarget.src = noImageLoad;
  };
  const [shows, setShows] = useState([]);

  useEffect(() => {
    getMostViewedShowsOfYear().then(data => setShows(data));
  }, []);

  return (
    <ul className={styles.list}>
      {shows &&
        shows.slice(0, 7).map(show => (
          <li key={show.id} className={styles.item}>
            <div className={styles.imageWrapper}>
              <LazyLoadImage
                alt={show.name}
                effect="blur"
                src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
                onError={imageOnErrorHandler}
                className={styles.img}
              />
            </div>
            <div className={styles.info}>
              <Link
                to={`/subscription/213/${show.id}`}
                className={styles.title}
              >
                {show.name}
              </Link>
              <p>Rate: {show.vote_average}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default TopRatedList;
