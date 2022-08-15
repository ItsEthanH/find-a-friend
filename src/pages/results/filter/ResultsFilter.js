import { useSelector } from 'react-redux';
import { FILTER_PAGES } from '../../../store/filter';

import ResultsFilterButton from './ResultsFilterButton';
import FilterHome from './filter-screens/FilterHome';
import FilterGender from './filter-screens/FilterGender';
import FilterDistance from './filter-screens/FilterDistance';

import classes from './styles/ResultsFilter.module.css';

function ResultsFilter() {
  const isFiltersOpen = useSelector((state) => state.filter.isFiltersOpen);
  const pageSelected = useSelector((state) => state.filter.pageSelected);
  let filterPage;

  switch (pageSelected) {
    case FILTER_PAGES.GENDER:
      filterPage = <FilterGender />;
      break;
    case FILTER_PAGES.DISTANCE:
      filterPage = <FilterDistance />;
      break;
    default:
      filterPage = <FilterHome />;
      break;
  }

  if (!isFiltersOpen) {
  }

  return (
    <div className={classes.filter}>
      <ResultsFilterButton />
      {isFiltersOpen && <div className={classes.dropdown}>{filterPage}</div>}
    </div>
  );
}

export default ResultsFilter;
