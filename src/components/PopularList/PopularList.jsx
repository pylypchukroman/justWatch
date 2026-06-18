import styles from './PopularList.module.scss';
import noImageLoad from '../../images/no-image-min.png';
import { useEffect, useState } from 'react';
import { getPopularToday } from 'Utils/MovieAPI';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';

const PopularList = () => {
  const imageOnErrorHandler = event => {
    event.currentTarget.src = noImageLoad;
  };

  const [shows, setShows] = useState([]);
  useEffect(() => {
    getPopularToday().then(data => setShows(data));
  }, []);

  return (
    <ul className={styles.list}>
      {shows &&
        shows.slice(0, 7).map(show => (
          <li key={show.id} className={styles.item}>
            <Link
              to={`/subscription/213/${show.id}`}
              className={styles.link}
            >
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
                <p className={styles.title}>{show.name}</p>
                <p>Rate: {show.vote_average}</p>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default PopularList;
