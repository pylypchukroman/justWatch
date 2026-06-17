import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import Logo from '../../images/logo-min.png';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.nav}>
      <NavLink className={styles.logo} exact to="/" onClick={closeMenu}>
        <img src={Logo} alt="BD Screens logo" width="80" height="20" />
      </NavLink>

      <button
        type="button"
        className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(prev => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
        <NavLink
          className={styles.link}
          activeClassName={styles.activeClass}
          to="/streamingService"
          onClick={closeMenu}
        >
          Streaming Service
        </NavLink>
        <NavLink
          className={styles.link}
          activeClassName={styles.activeClass}
          to="/subscription"
          onClick={closeMenu}
        >
          Subscription
        </NavLink>
        <div className={styles.user}>
          <p>U</p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
