import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFilter from '../../../../hooks/useFilter';
import { FILTER_PAGES, filterActions } from '../../../../store/filter';

import OptionWrapper from './OptionWrapper';

import classes from './styles/FilterScreen.module.css';

function FilterDistance() {
  const initialDistanceState = { value: 100 };
  const { values, updateValues } = useFilter(FILTER_PAGES.DISTANCE, initialDistanceState);

  function rangeChangeHandler(event) {
    updateValues('value', event.target.value);
  }

  const distanceValue = values.value;

  return (
    <OptionWrapper title="Distance">
      <form className={`${classes.options} ${classes.range}`}>
        <input
          type="range"
          id="distance"
          name="distance"
          value={+distanceValue}
          onChange={rangeChangeHandler}
          min={10}
          max={500}
          step={5}
        />
        <p>
          Within{' '}
          <input type="number" value={+distanceValue} onChange={rangeChangeHandler} maxLength="3" />{' '}
          miles
        </p>
      </form>
    </OptionWrapper>
  );
}

export default FilterDistance;
