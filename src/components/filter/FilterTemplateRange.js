import { useSelector } from 'react-redux';
import useFilter from '../../hooks/useFilter';

import FilterDropdownMobileHeader from './FilterDropdownMobileHeader';

import classes from './styles/FilterDropdown.module.css';

function FilterRange(props) {
  const isDesktop = props.isDesktop;
  const pageSelected = useSelector((state) => state.filter.pageSelected);
  const filterOptions = Object.keys(props.initialState);

  const { displayedValues, updateFilterValues } = useFilter(pageSelected, props.initialState);

  function filterChangeHandler(event) {
    event.target.value > 500
      ? updateFilterValues(event.target.id, 500)
      : updateFilterValues(event.target.id, +event.target.value);
  }

  const renderedOptions = filterOptions.map((option) => {
    return (
      <li>
        <input
          type="range"
          id={option}
          name={option}
          value={displayedValues[option]}
          onChange={filterChangeHandler}
          min={props.min}
          max={props.max}
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
            min={props.min}
            max={props.max}
          />{' '}
          miles
        </p>
      </li>
    );
  });

  return (
    <>
      {!isDesktop && <FilterDropdownMobileHeader title={pageSelected} />}
      <ul className={`${classes.options} ${classes.range}`}>{renderedOptions}</ul>
    </>
  );
}

export default FilterRange;
