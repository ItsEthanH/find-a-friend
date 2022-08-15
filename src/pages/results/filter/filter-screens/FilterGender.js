import { useEffect } from 'react';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER_PAGES, filterActions } from '../../../../store/filter';

import OptionWrapper from './OptionWrapper';

import classes from './styles/FilterScreen.module.css';

function FilterGender(props) {
  const maleRef = useRef();
  const femaleRef = useRef();
  const dispatch = useDispatch();
  const filterValues = useSelector((state) => state.filter.filters);

  function genderSelectHandler() {
    const isMaleSelected = maleRef.current.checked;
    const isFemaleSelected = femaleRef.current.checked;
    let selection;
    let quantity;

    if (isMaleSelected && !isFemaleSelected) {
      selection = 'male';
      quantity = 1;
    }
    if (!isMaleSelected && isFemaleSelected) {
      selection = 'female';
      quantity = 1;
    }
    if (isMaleSelected && isFemaleSelected) {
      selection = 'male,female';
      quantity = 2;
    }
    if (!isMaleSelected && !isFemaleSelected) {
      selection = '';
      quantity = 0;
    }

    dispatch(
      filterActions.setFilter({
        filter: FILTER_PAGES.GENDER,
        value: selection,
        filterQuantity: quantity,
      })
    );
  }

  useEffect(() => {
    if (!filterValues[FILTER_PAGES.GENDER]) return;
    if (filterValues[FILTER_PAGES.GENDER].value === 'male') maleRef.current.checked = true;
    if (filterValues[FILTER_PAGES.GENDER].value === 'female') femaleRef.current.checked = true;
    if (filterValues[FILTER_PAGES.GENDER].value === 'male,female') {
      maleRef.current.checked = true;
      femaleRef.current.checked = true;
    }
  }, []);

  return (
    <OptionWrapper title="Gender">
      <form className={`${classes.options} ${classes.checkbox}`}>
        <div>
          <label htmlFor="male">Male</label>
          <input
            type="checkbox"
            id="male"
            name="male"
            onChange={genderSelectHandler}
            ref={maleRef}
          />
        </div>
        <div>
          <label htmlFor="female">Female</label>
          <input
            type="checkbox"
            id="female"
            name="female"
            onChange={genderSelectHandler}
            ref={femaleRef}
          />
        </div>
      </form>
    </OptionWrapper>
  );
}

export default FilterGender;
