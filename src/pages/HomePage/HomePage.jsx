import styles from './HomePage.module.scss';
import Navigation from 'components/Navigation/Navigation';

const HomePage = () => {
  return (
    <>
      <Navigation />
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <p>Welcome to BD Screens</p>
          <h1 className={styles.title}>
            Download Unlimited <br /> Movies, Drama, Music Video <br /> and More
            Content.
          </h1>
          <p>
            Enjoy popular Movies and Live shows.
            <br /> Subscribe to your favorites tv networks now
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
