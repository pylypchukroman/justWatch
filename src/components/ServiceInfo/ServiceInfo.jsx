import styles from './ServiceInfo.module.scss';
import noImageLoad from '../../images/no-image-min.png';
import { useLocation } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PropTypes from 'prop-types';

const ServiceInfo = ({ service, subscribe }) => {
  const imageOnErrorHandler = event => {
    event.currentTarget.src = noImageLoad;
  };
  const location = useLocation();
  const currentPage = location.pathname.split('/')[1];

  return (
    <div className={styles.serviceInfo}>
      <div className={styles.imageWrapper}>
        <LazyLoadImage
          alt={service.name}
          effect="blur"
          src={`https://image.tmdb.org/t/p/original/${service.logo_path}`}
          onError={imageOnErrorHandler}
          className={styles.img}
        />
      </div>
      <div className={styles.serviceInfoText}>
        <p>{service.name}</p>
        <p>{service.headquarters}</p>
        <a href={service.homepage}>Home page</a>
        <button
          type="button"
          className={styles.sub}
          onClick={() => subscribe(service.id)}
          hidden={currentPage === 'subscription' ? true : false}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

ServiceInfo.propTypes = {
  service: PropTypes.object.isRequired,
  subscribe: PropTypes.func.isRequired,
};

export default ServiceInfo;
