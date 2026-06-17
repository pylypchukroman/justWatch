import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import Logo from '../../images/logo-min.png';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.logo} exact to="/">
        <img src={Logo} alt="logo" width="80" height="20" />
      </NavLink>
      <NavLink
        className={styles.link}
        activeClassName={styles.activeClass}
        to="/streamingService"
      >
        Streaming Service
      </NavLink>
      <NavLink
        className={styles.link}
        activeClassName={styles.activeClass}
        to="/subscription"
      >
        Subscription
      </NavLink>
      <div className={styles.user}>
        <p>U</p>
      </div>
    </nav>
  );
};

export default Navigation;
