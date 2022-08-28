import { useDispatch } from 'react-redux';
import { FILTER_PAGES, filterActions } from '../../store/filter';

import classes from './styles/FilterDropdownMobileHeader.module.css';

function FilterDropdownMobileHeader(props) {
  const { title, home, isDesktop } = props;

  const dispatch = useDispatch();

  function applyClickHandler() {
    props.onApply();
  }

  function clearClickHandler() {
    dispatch(filterActions.deleteAllFilters());
  }

  function backClickHandler() {
    dispatch(filterActions.changePage({ page: FILTER_PAGES.HOME }));
  }

  const applyButton = (
    <button
      type="button"
      className={`${classes.button} ${classes.apply}`}
      onClick={applyClickHandler}
    >
      Apply
    </button>
  );

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
      Clear
    </button>
  );

  const styles = `${classes.header} ${isDesktop ? classes.desktop : ''}`;
  return (
    <div className={styles}>
      <p className={classes.title}>{title}</p>
      <div className={classes.controls}>
        {home && !props.searchbar && applyButton}
        {home && clearButton}
      </div>
      {!home && backButton}
    </div>
  );
}

export default FilterDropdownMobileHeader;
