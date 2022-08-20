import { useSelector, useDispatch } from 'react-redux';

import FilterDropdownType from './FilterDropdownType';
import FilterTemplateRange from './FilterTemplateRange';
import FilterTemplateCheckbox from './FilterTemplateCheckbox';

import { filterActions, FILTER_PAGES } from '../../store/filter';
import FilterButtonDesktop from './FilterButtonDesktop';

function FilterDesktop(props) {
  const dispatch = useDispatch();
  const pageSelected = useSelector((state) => state.filter.pageSelected);
  const activeFilters = useSelector((state) => state.filter.activeFilters);
  const filterUrlFragment = useSelector((state) => state.filter.filterUrlFragment);

  console.log(activeFilters);

  const filterList = Object.values(FILTER_PAGES);
  const initialStates = props.initialStates;

  const renderedFilters = filterList.map((filter) => {
    const isDisabled =
      filter !== FILTER_PAGES.TYPE && Object.keys(activeFilters[FILTER_PAGES.TYPE]).length <= 0;

    function createFilter(givenFilter) {
      return (
        <FilterButtonDesktop key={filter} isDisabled={isDisabled} filter={filter}>
          {givenFilter}
        </FilterButtonDesktop>
      );
    }

    switch (filter) {
      case FILTER_PAGES.HOME:
        return null;
      case FILTER_PAGES.TYPE:
        return createFilter(<FilterDropdownType key={filter} isDesktop />);
      case FILTER_PAGES.DISTANCE:
        return createFilter(
          <FilterTemplateRange
            key={filter}
            initialState={initialStates[FILTER_PAGES.DISTANCE]}
            min={10}
            max={500}
            isDesktop
          />
        );
      default:
        return createFilter(
          <FilterTemplateCheckbox
            key={filter}
            initialState={initialStates[pageSelected]}
            page={pageSelected}
            isDesktop
          />
        );
    }
  });

  function applyFilters() {
    let urlFragment = '';
    for (const filter in activeFilters) {
      const keys = Object.keys(activeFilters[filter]);
      const values = Object.values(activeFilters[filter]);

      if (values.length === 0) continue;
      let urlParameter = `${filter.toLowerCase()}=`;

      if (keys[0] === 'value') {
        urlParameter += values[0];
      } else {
        urlParameter += keys.join(',').toLowerCase().replace(' ', '_');
      }

      urlFragment += urlParameter + '&';
    }

    urlFragment = urlFragment.slice(0, -1);
    console.log(urlFragment);
  }

  return (
    <>
      {renderedFilters}
      <button onClick={applyFilters}>Click me!</button>
    </>
  );
}

export default FilterDesktop;
