import { useSelector } from 'react-redux';
import useFilter from '../../hooks/useFilter';

import FilterDropdownMobileHeader from './FilterDropdownMobileHeader';

import classes from './styles/FilterDropdown.module.css';

function FilterTemplateRange(props) {
  const { isDesktop, min, max } = props;

  const pageSelected = useSelector((state) => state.filter.pageSelected);
  const initialState = useSelector((state) => state.filter.initialStates[pageSelected]);
  const filterOptions = Object.keys(initialState);

  const { displayedValues, updateFilterValues } = useFilter(pageSelected);

  function filterChangeHandler(event) {
    if (!parseInt(event.target.value)) return;
    event.target.value > 500
      ? updateFilterValues(event.target.id, 500)
      : updateFilterValues(event.target.id, +event.target.value);
  }

  const renderedOptions = filterOptions.map((option) => {
    return (
      <li key={option} className={classes.option}>
        <input
          type="range"
          id={option}
          name={option}
          value={displayedValues[option]}
          onChange={filterChangeHandler}
          min={min}
          max={max}
        />
        <p>
          Within{' '}
          <input
            type="number"
            id={option}
            name={option}
            value={displayedValues[option]}
            onChange={filterChangeHandler}
            maxLength={3}
            min={min}
            max={max}
          />{' '}
          miles
        </p>
      </li>
    );
  });

  const styles = `${classes['option-list']} ${classes.range} ${isDesktop ? classes.desktop : ''}`;
  return (
    <>
      {!isDesktop && <FilterDropdownMobileHeader title={pageSelected} />}
      <ul className={styles}>{renderedOptions}</ul>
    </>
  );
}

export default FilterTemplateRange;
