import { useSelector } from 'react-redux';
import useFilter from '../../../hooks/useFilter';

import OptionWrapper from './FilterWrapper';

import classes from './styles/Filter.module.css';

function FilterCheckbox(props) {
  const pageSelected = useSelector((state) => state.filter.pageSelected);
  const filterOptions = Object.keys(props.initialState);

  const { displayedValues, updateFilterValues } = useFilter(pageSelected, props.initialState);

  function filterChangeHandler(event) {
    updateFilterValues(event.target.id, event.target.checked);
  }

  const renderedOptions = filterOptions.map((option) => {
    const title = `${option[0].toUpperCase()}${option.slice(1, option.length)}`;

    return (
      <li>
        <label htmlFor={option}>{title}</label>
        <input
          checked={displayedValues[option]}
          type="checkbox"
          id={option}
          name={option}
          onChange={filterChangeHandler}
        />
      </li>
    );
  });

  return (
    <OptionWrapper title={pageSelected}>
      <ul className={`${classes.options} ${classes.checkbox}`}>{renderedOptions}</ul>
    </OptionWrapper>
  );
}

export default FilterCheckbox;
