import styles from './PaginationButtons.module.scss';
import PropTypes from 'prop-types';

const PaginationButtons = ({ page, onLoadMore, onLoadPrev }) => {
  return (
    <div className={styles.buttonsWrapper}>
      <button
        className={styles.paginationBtn}
        onClick={onLoadPrev}
        disabled={page <= 1}
      >
        Previous Page
      </button>
      <button className={styles.paginationBtn} onClick={onLoadMore}>
        Next Page
      </button>
    </div>
  );
};

PaginationButtons.propTypes = {
  page: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  onLoadPrev: PropTypes.func.isRequired,
};

export default PaginationButtons;
