import { useSelector } from 'react-redux';
import useFilter from '../../../hooks/useFilter';

import OptionWrapper from './FilterWrapper';

import classes from './styles/Filter.module.css';

function FilterRange(props) {
  const pageSelected = useSelector((state) => state.filter.pageSelected);
  const filterOptions = Object.keys(props.initialState);

  const { displayedValues, updateFilterValues } = useFilter(pageSelected, props.initialState);

  function filterChangeHandler(event) {
    updateFilterValues(event.target.id, +event.target.value);
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
          />{' '}
          miles
        </p>
      </li>
    );
  });

  return (
    <OptionWrapper title={pageSelected}>
      <ul className={`${classes.options} ${classes.range}`}>{renderedOptions}</ul>
    </OptionWrapper>
  );
}

export default FilterRange;
