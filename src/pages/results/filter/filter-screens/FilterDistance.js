import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER_PAGES, filterActions } from '../../../../store/filter';

import OptionWrapper from './OptionWrapper';

import classes from './styles/FilterScreen.module.css';

function FilterDistance() {
  let initialDistanceValue = 100;
  const filterValues = useSelector((state) => state.filter.filters);

  if (filterValues[FILTER_PAGES.DISTANCE]) {
    initialDistanceValue = filterValues[FILTER_PAGES.DISTANCE].value;
  }

  const dispatch = useDispatch();
  const [distanceValue, setDistanceValue] = useState(initialDistanceValue);

  function rangeChangeHandler(event) {
    let rangeFilterQuantity = 1;
    if (event.target.value === '100') rangeFilterQuantity = 0;

    setDistanceValue(event.target.value);
    dispatch(
      filterActions.setFilter({
        filter: FILTER_PAGES.DISTANCE,
        value: event.target.value,
        filterQuantity: rangeFilterQuantity,
      })
    );
  }

  return (
    <OptionWrapper title="Distance">
      <form className={`${classes.options} ${classes.range}`}>
        <input
          type="range"
          id="distance"
          name="distance"
          value={distanceValue}
          onChange={rangeChangeHandler}
          min={10}
          max={500}
          step={5}
        />
        <p>
          Within{' '}
          <input type="number" value={distanceValue} onChange={rangeChangeHandler} maxLength="3" />{' '}
          miles
        </p>
      </form>
    </OptionWrapper>
  );
}

export default FilterDistance;
