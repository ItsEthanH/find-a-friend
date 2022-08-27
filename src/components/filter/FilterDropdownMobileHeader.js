import { useDispatch } from 'react-redux';
import { FILTER_PAGES, filterActions } from '../../store/filter';

import classes from './styles/FilterDropdownMobileHeader.module.css';

function FilterDropdownMobileHeader(props) {
  const { title, home, isDesktop } = props;

  const dispatch = useDispatch();

  function clearClickHandler() {
    dispatch(filterActions.deleteAllFilters());
  }

  function backClickHandler() {
    dispatch(filterActions.changePage({ page: FILTER_PAGES.HOME }));
  }

  const backButton = (
    <button
      type="button"
      className={`${classes.button} ${classes.back}`}
      onClick={backClickHandler}
    >
      Back
    </button>
  );

  const clearButton = (
    <button
      type="button"
      className={`${classes.button} ${classes.clear}`}
      onClick={clearClickHandler}
    >
      Clear all filters
    </button>
  );

  const styles = `${classes.header} ${isDesktop ? classes.desktop : ''}`;
  return (
    <div className={styles}>
      <p className={classes.title}>{title}</p>
      {home ? clearButton : backButton}
    </div>
  );
}

export default FilterDropdownMobileHeader;
