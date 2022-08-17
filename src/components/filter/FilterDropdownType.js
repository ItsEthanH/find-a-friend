import { useDispatch } from 'react-redux';
import useFilter from '../../hooks/useFilter';

import FilterDropdownWrapper from './FilterDropdownWrapper';

import classes from './styles/FilterDropdown.module.css';
import { FILTER_PAGES } from '../../store/filter';
import { filterActions } from '../../store/filter';
import typeData from '../../util/typeData';

function FilterDropdownType() {
  const dispatch = useDispatch();
  const types = Object.keys(typeData);
  const initialTypeState = { value: 'all' };
  const { displayedValues, updateFilterValues } = useFilter(FILTER_PAGES.TYPE, initialTypeState);

  function optionSelectHandler(event) {
    dispatch(filterActions.deleteAllFilters());
    updateFilterValues('value', event.target.id);
  }

  const renderedOptions = types.map((type) => {
    const isChecked = displayedValues.value === type ? true : false;

    return (
      <li key={type}>
        <label htmlFor={type}>{typeData[type].name}</label>
        <input
          type="checkbox"
          checked={isChecked}
          id={type}
          name={type}
          onChange={optionSelectHandler}
        />
      </li>
    );
  });

  // creating a separate option for all animals to act as the default
  const isAllChecked = displayedValues.value === 'all' ? true : false;
  const allOption = (
    <li>
      <label htmlFor="all">All Animals</label>
      <input
        type="checkbox"
        checked={isAllChecked}
        id="all"
        name="all"
        onChange={optionSelectHandler}
      />
    </li>
  );

  return (
    <FilterDropdownWrapper title="Type">
      <ul className={`${classes.options} ${classes.checkbox}`}>
        {allOption}
        {renderedOptions}
      </ul>
    </FilterDropdownWrapper>
  );
}

export default FilterDropdownType;
