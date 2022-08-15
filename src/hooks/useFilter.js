import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../store/filter';

function useFilter(filter, initialState) {
  const dispatch = useDispatch();
  const activeFilters = useSelector((state) => state.filter.activeFilters);

  let retrievedState = { ...initialState };
  if (Object.keys(activeFilters[filter]).length > 0) {
    retrievedState = activeFilters[filter];
  }

  const [values, setValues] = useState(retrievedState);

  function updateValues(key, value) {
    setValues((prevState) => ({ ...prevState, [key]: value }));

    const keys = Object.keys(values);
    for (const key of keys) {
      dispatch(filterActions.setFilter({ filter, key, value }));
    }
  }

  return { values, updateValues };
}

export default useFilter;
