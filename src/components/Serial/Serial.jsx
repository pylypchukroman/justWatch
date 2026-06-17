import GoBackButton from 'components/GoBackButton/GoBackButton';
import Navigation from 'components/Navigation/Navigation';
import SeasonsList from 'components/SeasonsList/SeasonsList';
import SerialInfo from 'components/SerialInfo/SerialInfo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getSerial } from 'Utils/MovieAPI';
import styles from './Serial.module.scss';

const Serial = () => {
  const { serviceId, showId } = useParams();
  const [serial, setSerial] = useState({});

  const seasons = serial.seasons;

  useEffect(() => {
    showId && getSerial(showId).then(data => setSerial(data));
  }, [showId]);

  return (
    <div className={styles.wrapper}>
      <Navigation />
      <GoBackButton />
      <div className={styles.infoWrapper}>
        <SerialInfo serial={serial} />
        <div className={styles.seasonsList}>
          <SeasonsList
            seasons={seasons}
            serviceId={serviceId}
            showId={showId}
          />
        </div>
      </div>
    </div>
  );
};

export default Serial;
