import { useState } from 'react';
import { useSelector } from 'react-redux';
import useFilter from '../../hooks/useFilter';

import FilterDropdownMobileHeader from './FilterDropdownMobileHeader';

import classes from './styles/FilterDropdown.module.css';

function FilterTemplateCheckbox(props) {
  const isDesktop = props.isDesktop;
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
      className={`${classes.search} ${isDesktop ? classes.desktop : ''}`}
      onChange={breedChangeHandler}
      type="text"
      placeholder="Search for breeds..."
      aria-label="Search for breeds"
    />
  );

  let renderedOptions;
  if (!filterOptions || initialKeys.length === 0)
    renderedOptions = (
      <p className={classes.none}>
        There are no results for this filter. Please try again with different filters.
      </p>
    );
  else
    renderedOptions = filterOptions.map((option) => {
      const title = `${option[0].toUpperCase()}${option.slice(1, option.length)}`;
      const isChecked = displayedValues[option];
      const listStyle = `${classes.option} ${isChecked && isDesktop ? classes.selected : ''}`;

      return (
        <li key={option} className={listStyle}>
          <label htmlFor={option}>{title}</label>
          <input
            type="checkbox"
            checked={isChecked}
            id={option}
            name={option}
            onChange={filterChangeHandler}
          />
        </li>
      );
    });

  const styles = `${classes['option-list']} ${classes.checkbox} ${
    isDesktop ? classes.desktop : ''
  }`;

  return (
    <>
      {!isDesktop && <FilterDropdownMobileHeader title={pageSelected} />}
      {props.page === 'Breed' && breedSearchBar}
      <ul className={styles}>{renderedOptions}</ul>
    </>
  );
}

export default FilterTemplateCheckbox;
