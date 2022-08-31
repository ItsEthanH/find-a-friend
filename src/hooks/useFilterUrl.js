import { useSelector } from 'react-redux';

function useFilterUrl() {
  const activeFilters = useSelector((state) => state.filter.activeFilters);

  function createUrl() {
    let urlFragment = '';
    for (const filter in activeFilters) {
      const keys = Object.keys(activeFilters[filter]);
      const values = Object.values(activeFilters[filter]);

      if (values.length === 0) continue;
      let urlParameter = `${filter.toLowerCase()}=`;

      if (keys[0] === 'value') {
        urlParameter += values[0];
      } else {
        urlParameter += keys.join(',').toLowerCase().replaceAll(' ', '-');
      }

      urlFragment += urlParameter + '&';
    }

    return urlFragment.slice(0, -1);
  }

  return createUrl;
}

export default useFilterUrl;
