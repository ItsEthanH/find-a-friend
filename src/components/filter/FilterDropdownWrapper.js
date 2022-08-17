import { useDispatch } from 'react-redux';
import { FILTER_PAGES, filterActions } from '../../store/filter';

import classes from './styles/FilterDropdownWrapper.module.css';

function FilterDropdownWrapper(props) {
  const dispatch = useDispatch();

  function clearClickHandler() {
    dispatch(filterActions.deleteAllFilters());
  }

  function backClickHandler() {
    dispatch(filterActions.changePage(FILTER_PAGES.HOME));
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

  return (
    <>
      <div className={classes.header}>
        <p className={classes.title}>{props.title}</p>
        {props.home ? clearButton : backButton}
      </div>
      {props.children}
    </>
  );
}

export default FilterDropdownWrapper;
