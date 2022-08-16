import { useSelector } from 'react-redux';
import { FILTER_PAGES } from '../../../store/filter';

import ResultsFilterButton from './ResultsFilterButton';
import FilterCheckbox from './FilterCheckbox';
import FilterRange from './FilterRange';

import FilterHome from './FilterHome';
// import FilterGender from './filter-screens/FilterGender';
// import FilterDistance from './filter-screens/FilterDistance';
// import FilterAge from './filter-screens/FilterAge';

import classes from './styles/ResultsFilter.module.css';

function ResultsFilter() {
  const isFiltersOpen = useSelector((state) => state.filter.isFiltersOpen);
  const pageSelected = useSelector((state) => state.filter.pageSelected);
  let filterPage;
  // initial states for each filter - each object gets mapped to a template filter where all state can be handled
  const distanceInitialState = { value: 100 };
  const genderInitialState = { male: false, female: false };
  const ageInitialState = { baby: false, young: false, adult: false, senior: false };
  const coatInitialState = {
    short: false,
    medium: false,
    long: false,
    wire: false,
    hairless: false,
  };
  const requirementsInitialState = {
    'child friendly': false,
    'dog friendly': false,
    'cat friendly': false,
    'house trained': false,
    'special needs': false,
  };

  switch (pageSelected) {
    case FILTER_PAGES.DISTANCE:
      filterPage = <FilterRange initialState={distanceInitialState} min={10} max={500} />;
      break;
    case FILTER_PAGES.GENDER:
      filterPage = <FilterCheckbox initialState={genderInitialState} />;
      break;
    case FILTER_PAGES.AGE:
      filterPage = <FilterCheckbox initialState={ageInitialState} />;
      break;
    case FILTER_PAGES.COAT:
      filterPage = <FilterCheckbox initialState={coatInitialState} />;
      break;
    case FILTER_PAGES.REQUIREMENTS:
      filterPage = <FilterCheckbox initialState={requirementsInitialState} />;
      break;

    default:
      filterPage = <FilterHome />;
      break;
  }

  return (
    <div className={classes.filter}>
      <ResultsFilterButton />
      {isFiltersOpen && <div className={classes.dropdown}>{filterPage}</div>}
    </div>
  );
}

export default ResultsFilter;
