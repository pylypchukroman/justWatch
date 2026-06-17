import EpisodesList from 'components/EpisodesList/EpisodesList';
import GoBackButton from 'components/GoBackButton/GoBackButton';
import Navigation from 'components/Navigation/Navigation';
import { NetworkContext } from 'Context/NetworkContext';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getSeasonInfo } from 'Utils/MovieAPI';
import styles from './Season.module.scss';

const Season = () => {
  const { serviceId, showId, seasonId } = useParams();
  const { networks } = useContext(NetworkContext);
  const [episodes, setEpisodes] = useState(null);

  const streamingService = networks.find(
    network => network.id === Number(serviceId)
  );

  useEffect(() => {
    getSeasonInfo(showId, seasonId).then(data => setEpisodes(data.episodes));
  }, [showId, seasonId]);

  return (
    <>
      <Navigation />
      <div className={styles.wrapper}>
        <GoBackButton />
        <h2 className={styles.title}>List of episodes of Season {seasonId}</h2>
        <div className={styles.episodesWrapper}>
          <EpisodesList
            episodes={episodes}
            streamingService={streamingService}
          />
        </div>
      </div>
    </>
  );
};

export default Season;
