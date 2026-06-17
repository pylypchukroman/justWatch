import ComedyTop from 'components/ComedyTop/ComedyTop';
import Navigation from 'components/Navigation/Navigation';
import PopularList from 'components/PopularList/PopularList';
import SubscribList from 'components/SubscribList/SubscribList';
import TopRatedList from 'components/TopRatedList/TopRatedList';
import { NetworkContext } from 'Context/NetworkContext';
import { useContext } from 'react';
import styles from './SubscriptionPage.module.scss';

const SubscriptionPage = () => {
  const { networks } = useContext(NetworkContext);
  const subscribList = networks.filter(network => network.sub === true);

  return (
    <>
      <Navigation />
      <div className={styles.wrapper}>
        <h2>Popular striming servises</h2>
        <SubscribList subscribList={subscribList} />
        <h2>Top rated on Netflix</h2>
        <TopRatedList />
        <h2>Popular today</h2>
        <PopularList />
        <h2>Recomend in Comedy</h2>
        <ComedyTop />
      </div>
    </>
  );
};

export default SubscriptionPage;
