import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../store/filter';

/**
 *
 * @param {string} filter - The global constant identifier for the filter (e.g. FILTER_PAGES.HOME)
 * @param {object} initialState - The default state of the filter. Give an object with each key being a filter option (e.g. x-small), and the key being the value (e.g. true)
 * @returns - **displayedValues**: An object of the filter data to be shown. Default values are not stored in Redux, but are displayable through displayedValues.
 * @returns - **updateFilterValues**: Pass a key and a value to update the filter. Defaults will be reset in the Redux as needed
 */

function useFilter(filter) {
  const dispatch = useDispatch();
  const initialState = useSelector((state) => state.filter.initialStates[filter]);
  // savedFilters is a link to the Redux store. if a user enters a default value, based on initialState, that key/value pair will not be stored here.
  const savedFilters = useSelector((state) => state.filter.activeFilters[filter]);
  // a 'middleman' between savedFilters and what the user enters. initialised with the default values, but can be updated with the useEffect() call
  const [displayedValues, setDisplayedValues] = useState({ ...initialState });

  // takes a key and a value, and updates both stores accordingly
  function updateFilterValues(key, value) {
    // if the value is not a default, save it
    if (value !== initialState[key]) {
      dispatch(filterActions.setFilter({ filter, key, value }));
    }
    // if the value is a default, remove it from the store
    if (value === initialState[key]) {
      dispatch(filterActions.deleteSingleFilter({ filter, key }));
    }
    // either way, save it in the displayed values.
    setDisplayedValues((prevState) => ({ ...prevState, [key]: value }));
  }

  // searches the redux store. if a saved filter has already been applied, overwrite the default value.
  function mountFilter() {
    const savedFilterKeys = Object.keys(savedFilters);
    for (const filter of savedFilterKeys) {
      setDisplayedValues((prevState) => ({ ...prevState, [filter]: savedFilters[filter] }));
    }
  }

  // only calls mountFilter() on mount, hence the lack of dependencies
  useEffect(() => {
    mountFilter();
  }, []);

  return { displayedValues, updateFilterValues };
}

export default useFilter;
