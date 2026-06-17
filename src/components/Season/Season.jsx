import EpisodesList from 'components/EpisodesList/EpisodesList';
import GoBackButton from 'components/GoBackButton/GoBackButton';
import Navigation from 'components/Navigation/Navigation';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { getSeasonInfo } from 'Utils/MovieAPI';
import styles from './Season.module.scss';

const Season = () => {
  const { showId, seasonId } = useParams();
  const [episodes, setEpisodes] = useState(null);

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
          <EpisodesList episodes={episodes} />
        </div>
      </div>
    </>
  );
};

export default Season;
