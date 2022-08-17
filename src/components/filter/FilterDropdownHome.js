import { useDispatch, useSelector } from 'react-redux';

import FilterDropdownWrapper from './FilterDropdownWrapper';

import classes from './styles/FilterDropdown.module.css';
import { FILTER_PAGES, filterActions } from '../../store/filter';

function FilterDropdownHome() {
  const dispatch = useDispatch();
  const activeFilters = useSelector((state) => state.filter.activeFilters);
  const options = Object.keys(FILTER_PAGES);
  const areOptionsUnlocked = Object.keys(activeFilters[FILTER_PAGES.TYPE]).length !== 0;

  function selectPageHandler(event) {
    dispatch(filterActions.changePage({ page: event.target.id }));
  }

  const typeName = FILTER_PAGES.TYPE;
  const quantity = Object.keys(activeFilters[typeName]).length;
  const typeOption = (
    <li key={typeName}>
      <button className={classes.home} id={typeName} onClick={selectPageHandler}>
        {typeName}
        {quantity > 0 && <p className={classes.quantity}>{quantity}</p>}
      </button>
      {typeName !== FILTER_PAGES.REQUIREMENTS && <hr />}
    </li>
  );

  const otherOptions = options.map((option) => {
    const optionId = FILTER_PAGES[option];
    if (optionId === FILTER_PAGES.TYPE || optionId === FILTER_PAGES.HOME) return false;
    const quantity = Object.keys(activeFilters[optionId]).length;

    return (
      <li key={optionId}>
        <button
          disabled={!areOptionsUnlocked}
          className={classes.home}
          id={optionId}
          onClick={selectPageHandler}
        >
          {optionId}
          {quantity > 0 && <p className={classes.quantity}>{quantity}</p>}
        </button>
        {optionId !== FILTER_PAGES.REQUIREMENTS && <hr />}
      </li>
    );
  });

  return (
    <FilterDropdownWrapper title="Filters" home>
      <ul className={classes.options}>
        {typeOption}
        {otherOptions}
      </ul>
    </FilterDropdownWrapper>
  );
}

export default FilterDropdownHome;
