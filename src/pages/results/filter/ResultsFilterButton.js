import { useSelector, useDispatch } from 'react-redux';
import { filterActions } from '../../../store/filter';

import classes from './styles/ResultsFilterButton.module.css';

function ResultsFilterButton() {
  const isFiltersOpen = useSelector((state) => state.filter.isFiltersOpen);
  const dispatch = useDispatch();

  function filterButtonHandler() {
    dispatch(filterActions.toggleFilter());
  }

  return (
    <button className={classes.toggle} onClick={filterButtonHandler}>
      <p>Filters (2 selected)</p>
      {isFiltersOpen ? <p>&#11165;</p> : <p>&#11167;</p>}
    </button>
  );
}

export default ResultsFilterButton;
