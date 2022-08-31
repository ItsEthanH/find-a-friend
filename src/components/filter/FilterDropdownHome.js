import { useDispatch, useSelector } from 'react-redux';

import FilterDropdownMobileHeader from './FilterDropdownMobileHeader';

import classes from './styles/FilterDropdown.module.css';
import { FILTER_PAGES, filterActions } from '../../store/filter';

function FilterDropdownHome(props) {
  const { isDesktop } = props;

  const dispatch = useDispatch();
  const activeFilters = useSelector((state) => state.filter.activeFilters);
  const areOptionsUnlocked = activeFilters[FILTER_PAGES.TYPE].value;

  function applyClickHandler() {
    props.onApply();
  }

  function selectPageHandler(event) {
    dispatch(filterActions.changePage({ page: event.target.id }));
  }

  const renderedOptions = Object.keys(activeFilters).map((option) => {
    const quantity = Object.keys(activeFilters[option]).length;
    const isDisabled = option !== FILTER_PAGES.TYPE && !areOptionsUnlocked;

    console.log(option);

    return (
      <li key={option}>
        <button
          type="button"
          disabled={isDisabled}
          id={option}
          className={classes.option}
          onClick={selectPageHandler}
        >
          {option}
          {quantity > 0 && <p className={classes.quantity}>{quantity}</p>}
        </button>
        {option !== FILTER_PAGES.REQUIREMENTS && <hr />}
      </li>
    );
  });

  const styles = `${classes['option-list']} ${isDesktop ? classes.desktop : ''}`;
  return (
    <>
      <FilterDropdownMobileHeader
        title="Filters"
        isDesktop={isDesktop}
        onApply={applyClickHandler}
        searchbar={props.searchbar}
        home
      />
      <ul className={styles} data-testid="filter-home">
        {renderedOptions}
      </ul>
    </>
  );
}

export default FilterDropdownHome;
