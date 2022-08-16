import { useDispatch } from 'react-redux';
import { filterActions } from '../../../store/filter';
import useFilter from '../../../hooks/useFilter';

import { FILTER_PAGES } from '../../../store/filter';
import OptionWrapper from './FilterWrapper';

import classes from './styles/Filter.module.css';
import typeData from '../../../util/typeData';

function FilterType() {
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
      <li>
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
    <OptionWrapper title="Type">
      <ul className={`${classes.options} ${classes.checkbox}`}>
        {allOption}
        {renderedOptions}
      </ul>
    </OptionWrapper>
  );
}

export default FilterType;
