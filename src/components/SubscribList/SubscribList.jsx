import { Link } from 'react-router-dom';
import styles from './SubscribList.module.scss';
import noImageLoad from '../../images/no-image-min.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PropTypes from 'prop-types';

const SubscribList = ({ subscribList }) => {
  const imageOnErrorHandler = event => {
    event.currentTarget.src = noImageLoad;
  };
  return (
    <ul className={styles.list}>
      {subscribList &&
        subscribList.map(network => (
          <li key={network.id} className={styles.item}>
            <Link
              to={{
                pathname: `/subscription/${network.id}`,
              }}
              className={styles.link}
            >
              <p className={styles.linkText}>{network.name}</p>
              <div className={styles.imgWrapper}>
                <LazyLoadImage
                  alt={network.name}
                  effect="blur"
                  src={`https://image.tmdb.org/t/p/original/${network.logo_path}`}
                  onError={imageOnErrorHandler}
                  className={styles.img}
                />
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
};

SubscribList.propTypes = {
  subscribList: PropTypes.array.isRequired,
};

export default SubscribList;
