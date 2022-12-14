import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import FilterDropdownType from './FilterDropdownType';
import FilterTemplateRange from './FilterTemplateRange';
import FilterTemplateCheckbox from './FilterTemplateCheckbox';

import { FILTER_PAGES } from '../../store/filter';
import FilterButtonDesktop from './FilterButtonDesktop';

import classes from './styles/FilterDesktop.module.css';

function FilterDesktop(props) {
  const { isLoading } = props;
  const params = useParams();

  const filterList = Object.values(FILTER_PAGES);
  const pageSelected = useSelector((state) => state.filter.pageSelected);
  const hasTypeBeenChosen = useSelector(
    (state) => state.filter.activeFilters[FILTER_PAGES.TYPE].value === undefined
  );

  const renderedFilters = filterList.map((filter) => {
    const isDisabled =
      (filter !== FILTER_PAGES.TYPE && hasTypeBeenChosen) ||
      (filter === FILTER_PAGES.DISTANCE && params.location === 'global');

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
        return createFilter(<FilterTemplateRange key={filter} min={0} max={500} isDesktop />);
      default:
        return createFilter(
          <FilterTemplateCheckbox
            key={filter}
            page={pageSelected}
            isLoading={isLoading}
            isDesktop
          />
        );
    }
  });

  function applyFilterHandler() {
    props.onApply();
  }

  function clearFilterHandler() {
    props.onClear();
  }

  return (
    <>
      {renderedFilters}
      <div className={classes.buttons}>
        <button onClick={applyFilterHandler}>Apply Filters</button>
        <button onClick={clearFilterHandler}>Clear Filters</button>
      </div>
    </>
  );
}

export default FilterDesktop;
