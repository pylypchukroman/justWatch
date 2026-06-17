import { useHistory } from 'react-router';
import styles from './GoBackButton.module.scss';

const GoBackButton = () => {
  const history = useHistory();
  const historeChange = () => {
    history.goBack();
  };
  return (
    <button type="button" className={styles.button} onClick={historeChange}>
      Go back
    </button>
  );
};

export default GoBackButton;
