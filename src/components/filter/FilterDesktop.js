import { useSelector } from 'react-redux';

import FilterDropdownHome from './FilterDropdownHome';
import FilterDropdownType from './FilterDropdownType';
import FilterTemplateRange from './FilterTemplateRange';
import FilterTemplateCheckbox from './FilterTemplateCheckbox';

import classes from './styles/FilterDesktop.module.css';
import { FILTER_PAGES } from '../../store/filter';
import FilterButtonDesktop from './FilterButtonDesktop';

function FilterDesktop(props) {
  const pageSelected = useSelector((state) => state.filter.pageSelected);
  const activeFilters = useSelector((state) => state.filter.activeFilters);

  const filterList = Object.values(FILTER_PAGES);
  const initialStates = props.initialStates;

  const renderedFilters = filterList.map((filter) => {
    const isDisabled =
      filter !== FILTER_PAGES.TYPE && Object.keys(activeFilters[FILTER_PAGES.TYPE]).length <= 0;

    function createFilter(givenFilter) {
      return (
        <FilterButtonDesktop isDisabled={isDisabled} filter={filter}>
          {givenFilter}
        </FilterButtonDesktop>
      );
    }

    switch (filter) {
      case FILTER_PAGES.HOME:
        return <></>;
      case FILTER_PAGES.TYPE:
        return createFilter(<FilterDropdownType isDesktop />);
      case FILTER_PAGES.DISTANCE:
        return createFilter(
          <FilterTemplateRange
            initialState={initialStates[FILTER_PAGES.DISTANCE]}
            min={10}
            max={500}
            isDesktop
          />
        );
      default:
        return createFilter(
          <FilterTemplateCheckbox
            initialState={initialStates[pageSelected]}
            page={pageSelected}
            isDesktop
          />
        );
    }
  });

  return renderedFilters;
}

export default FilterDesktop;
