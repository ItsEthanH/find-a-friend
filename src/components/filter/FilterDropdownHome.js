import { useDispatch, useSelector } from 'react-redux';

import FilterDropdownMobileHeader from './FilterDropdownMobileHeader';

import classes from './styles/FilterDropdown.module.css';
import { FILTER_PAGES, filterActions } from '../../store/filter';

function FilterDropdownHome(props) {
  const dispatch = useDispatch();
  const activeFilters = useSelector((state) => state.filter.activeFilters);
  const options = Object.keys(FILTER_PAGES);
  const areOptionsUnlocked = Object.keys(activeFilters[FILTER_PAGES.TYPE]).length !== 0;
  const isDesktop = props.isDesktop;

  function selectPageHandler(event) {
    dispatch(filterActions.changePage({ page: event.target.id }));
  }

  const renderedOptions = options.map((option) => {
    const optionName = FILTER_PAGES[option];
    if (optionName === FILTER_PAGES.HOME) return null;

    const quantity = Object.keys(activeFilters[optionName]).length;
    const isDisabled = optionName !== FILTER_PAGES.TYPE && !areOptionsUnlocked;

    return (
      <li key={optionName}>
        <button
          disabled={isDisabled}
          id={optionName}
          className={classes.option}
          onClick={selectPageHandler}
        >
          {optionName}
          {quantity > 0 && <p className={classes.quantity}>{quantity}</p>}
        </button>
        {optionName !== FILTER_PAGES.REQUIREMENTS && <hr />}
      </li>
    );
  });

  const styles = `${classes['option-list']} ${isDesktop ? classes.desktop : ''}`;
  return (
    <>
      <FilterDropdownMobileHeader title="Filters" isDesktop={isDesktop} home />
      <ul className={styles}>{renderedOptions}</ul>
    </>
  );
}

export default FilterDropdownHome;
