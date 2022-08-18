import { useDispatch } from 'react-redux';
import { FILTER_PAGES, filterActions } from '../../store/filter';

import classes from './styles/FilterDropdownMobileHeader.module.css';

function FilterDropdownMobileHeader(props) {
  const dispatch = useDispatch();

  function clearClickHandler() {
    dispatch(filterActions.deleteAllFilters());
  }

  function backClickHandler() {
    dispatch(filterActions.changePage({ page: FILTER_PAGES.HOME }));
  }

  const backButton = (
    <button className={`${classes.button} ${classes.back}`} onClick={backClickHandler}>
      Back
    </button>
  );

  const clearButton = (
    <button className={`${classes.button} ${classes.clear}`} onClick={clearClickHandler}>
      Clear all filters
    </button>
  );

  const isDesktop = props.isDesktop;
  const styles = `${classes.header} ${isDesktop ? classes.desktop : ''}`;
  return (
    <div className={styles}>
      <p className={classes.title}>{props.title}</p>
      {props.home ? clearButton : backButton}
    </div>
  );
}

export default FilterDropdownMobileHeader;