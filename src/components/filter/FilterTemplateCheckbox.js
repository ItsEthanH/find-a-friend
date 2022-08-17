import { useState } from 'react';
import { useSelector } from 'react-redux';
import useFilter from '../../hooks/useFilter';

import FilterDropdownWrapper from './FilterDropdownWrapper';

import classes from './styles/FilterDropdown.module.css';

function FilterCheckbox(props) {
  const pageSelected = useSelector((state) => state.filter.pageSelected);
  const initialKeys = Object.keys(props.initialState);
  const [filterOptions, setFilterOptions] = useState(initialKeys);

  const { displayedValues, updateFilterValues } = useFilter(pageSelected, props.initialState);

  function filterChangeHandler(event) {
    updateFilterValues(event.target.id, event.target.checked);
  }

  function breedChangeHandler(event) {
    const text = event.target.value;
    setFilterOptions(initialKeys.filter((breed) => breed.toLowerCase().includes(text)));
  }

  const breedSearchBar = (
    <input
      className={classes.breed}
      onChange={breedChangeHandler}
      type="text"
      placeholder="Search for breeds..."
      aria-label="Search for breeds"
    />
  );

  const renderedOptions = filterOptions.map((option) => {
    const title = `${option[0].toUpperCase()}${option.slice(1, option.length)}`;

    return (
      <li key={option}>
        <label htmlFor={option}>{title}</label>
        <input
          type="checkbox"
          checked={displayedValues[option]}
          id={option}
          name={option}
          onChange={filterChangeHandler}
        />
      </li>
    );
  });

  console.log(renderedOptions);

  return (
    <FilterDropdownWrapper title={pageSelected}>
      {props.breed && breedSearchBar}
      {props.isLoading && <p>Loading...</p>}
      {props.initialState && (
        <ul className={`${classes.options} ${classes.checkbox}`}>
          {renderedOptions.length === 0 && (
            <p className={classes.none}>
              You cannot apply this filter with the selected animal type
            </p>
          )}
          {renderedOptions}
        </ul>
      )}
    </FilterDropdownWrapper>
  );
}

export default FilterCheckbox;
