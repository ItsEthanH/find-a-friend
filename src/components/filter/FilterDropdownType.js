import { useDispatch } from 'react-redux';
import useFilter from '../../hooks/useFilter';

import FilterDropdownMobileHeader from './FilterDropdownMobileHeader';

import classes from './styles/FilterDropdown.module.css';
import { FILTER_PAGES } from '../../store/filter';
import { filterActions } from '../../store/filter';
import typeData from '../../util/typeData';

function FilterDropdownType(props) {
  const isDesktop = props.isDesktop;
  const dispatch = useDispatch();
  const types = Object.keys(typeData);
  const initialTypeState = { value: 'all' };
  const { displayedValues, updateFilterValues } = useFilter(FILTER_PAGES.TYPE, initialTypeState);

  function optionSelectHandler(event) {
    dispatch(filterActions.deleteAllFilters());

    if (!event.target.checked) {
      updateFilterValues('value', 'all');
    } else {
      updateFilterValues('value', event.target.id);
    }
  }

  const renderedOptions = types.map((type) => {
    const isChecked = displayedValues.value === type ? true : false;
    const optionStyle = `${classes.option} ${isChecked && classes.selected}`;

    return (
      <li key={type} className={optionStyle}>
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

  const styles = `${classes['option-list']} ${classes.checkbox} ${
    isDesktop ? classes.desktop : ''
  }`;
  return (
    <>
      {!props.isDesktop && <FilterDropdownMobileHeader title="Type" />}
      <ul className={styles}>{renderedOptions}</ul>
    </>
  );
}

export default FilterDropdownType;
