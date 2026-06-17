import Navigation from 'components/Navigation/Navigation';
import styles from './StreamingServicePage.module.scss';
import { useContext } from 'react';
import { NetworkContext } from 'Context/NetworkContext';
import NetworksList from 'components/NetworksList/NetworksList';

const StreamingServicePage = () => {
  const { networks } = useContext(NetworkContext);

  return (
    <>
      <Navigation />
      <div className={styles.wrapper}>
        <h2>Popular striming servises</h2>
        <NetworksList networks={networks} />
      </div>
    </>
  );
};

export default StreamingServicePage;
