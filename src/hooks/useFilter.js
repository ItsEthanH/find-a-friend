import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../store/filter';

function useFilter(filter, initialState) {
  const dispatch = useDispatch();
  const currentFilters = useSelector((state) => state.filter.filters);
  const [values, setValues] = useState(initialState);

  function updateValues(key, value) {
    setValues((prevState) => ({ ...prevState, [key]: value }));
  }

  function initialiseFilter() {
    if (!currentFilters[filter]) return;

    if (Object.keys(initialState).length === 1) {
      setValues({ [filter]: currentFilters[filter] });
    } else {
      const valueArray = currentFilters[filter].split(',');
      valueArray.forEach((value) => {
        if (!value) return;

        setValues((prevState) => ({ ...prevState, [value]: true }));
      });
    }
  }

  useEffect(() => {
    let dispatchValue = '';
    let dispatchQuantity = 0;

    Object.keys(values).forEach((key, index) => {
      // adds a comma between each value - API requirement
      if (index > 0) dispatchValue += ',';

      // compares current state with initial state. differences are treated as filters added, adds one to filter quantity
      if (values[key] !== initialState[key]) dispatchQuantity++;

      dispatchValue += values[key];
    });

    dispatch(
      filterActions.setFilter({
        filter,
        value: dispatchValue,
        filterQuantity: dispatchQuantity,
      })
    );
  }, [values]);

  useEffect(initialiseFilter, []);

  return { values, updateValues };
}

export default useFilter;
