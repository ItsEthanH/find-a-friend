import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../store/filter';

/**
 *
 * @param {string} filter - The global constant identifier for the filter (e.g. FILTER_PAGES.HOME)
 * @param {object} initialState - The default state of the filter. Give an object with each key being a filter option (e.g. x-small), and the key being the value (e.g. true)
 * @returns - VALUES: An object of the latest state snapshot of the filter. UPDATEFILTERVALUES - Pass a key and a value to update the filter. Defaults will be reset as needed
 */

function useFilter(filter, initialState) {
  const dispatch = useDispatch();

  // filterKeys gives us an array of all the options present in the filter
  const filterKeys = Object.keys(initialState);
  // filterValues gives an object with all the currently applied filters in effect
  const filterValues = useSelector((state) => state.filter.activeFilters[filter]);

  function updateFilterValues(key, value) {
    // if the value given to update is the same as the default, delete it. this updates the filter quantity on the fitlerHome component
    if (value === initialState[key]) {
      dispatch(filterActions.deleteSingleFilter({ filter, key }));
      return;
    }
    // if not, update normally
    dispatch(filterActions.setFilter({ filter, key, value }));
  }

  function mountFilter() {
    // on filter mount, search through the saved filters. if a saved value isn't present, save the default value into the store
    // this prevents a blank value being displayed when the filter is mounted, as default values are removed from the store in updateFilterValues
    for (const key of filterKeys) {
      if (!filterValues[key]) {
        dispatch(filterActions.setFilter({ filter, key, value: initialState[key] }));
      }
    }
  }

  // when the filter unmounts, check the store and remove the default values, to keep the quantities up to date
  function unmountFilter() {
    for (const key of filterKeys) {
      if (initialState[key] === filterValues[key]) {
        dispatch(filterActions.deleteSingleFilter({ filter, key }));
      }
    }
  }

  // useEffect runs on mount and unmount ONLY (hence the lack of dependancies)
  useEffect(() => {
    mountFilter();
    return unmountFilter();
  }, []);

  return { filterValues, updateFilterValues };
}

export default useFilter;
