import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import useFilter from '../../hooks/useFilter';

import FilterDropdownMobileHeader from './FilterDropdownMobileHeader';

import classes from './styles/FilterDropdown.module.css';

function FilterTemplateCheckbox(props) {
  const { isDesktop, isLoading } = props;

  const pageSelected = useSelector((state) => state.filter.pageSelected);
  const initialState = useSelector((state) => state.filter.initialStates[pageSelected]);
  const [filterOptions, setFilterOptions] = useState(Object.keys(initialState));
  const { displayedValues, updateFilterValues } = useFilter(pageSelected);

  function filterChangeHandler(event) {
    updateFilterValues(event.target.id, event.target.checked);
  }

  function breedChangeHandler(event) {
    const text = event.target.value;
    setFilterOptions((prevState) =>
      prevState.filter((breed) => breed.toLowerCase().includes(text))
    );
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

  useEffect(() => {
    setFilterOptions(Object.keys(initialState));
  }, [initialState]);

  const renderedOptions = filterOptions.map((option) => {
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

  const noResults = (
    <p className={classes.info}>
      There are no results for this filter. Please try again with different filters.
    </p>
  );

  const styles = `${classes['option-list']} ${classes.checkbox} ${
    isDesktop ? classes.desktop : ''
  }`;

  return (
    <>
      {!isDesktop && <FilterDropdownMobileHeader title={pageSelected} />}
      {pageSelected === 'Breed' && breedSearchBar}
      {isLoading && <p className={classes.info}>Loading...</p>}
      {!isLoading && filterOptions.length === 0 && noResults}
      {!isLoading && <ul className={styles}>{renderedOptions}</ul>}
    </>
  );
}

export default FilterTemplateCheckbox;
