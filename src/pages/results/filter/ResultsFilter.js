import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FILTER_PAGES } from '../../../store/filter';

import ResultsFilterButton from './ResultsFilterButton';

import FilterHome from './FilterHome';
import FilterType from './FilterType';
import FilterRange from './FilterRange';
import FilterCheckbox from './FilterCheckbox';

import classes from './styles/ResultsFilter.module.css';
import typeData from '../../../util/typeData';
import useFetch from '../../../hooks/useFetch';

function ResultsFilter() {
  let filterPage;
  let breedRef = useRef();
  const coatRef = useRef();
  const dropdownOpen = useSelector((state) => state.ui.resultsDropdownOpen);
  const pageSelected = useSelector((state) => state.filter.pageSelected);

  const activeFilters = useSelector((state) => state.filter.activeFilters);
  const activeType = activeFilters[FILTER_PAGES.TYPE];

  // initial states for each filter - each object gets mapped to a template filter where all state can be handled
  const distanceInitialState = { value: 100 };
  const genderInitialState = { male: false, female: false };
  const ageInitialState = { baby: false, young: false, adult: false, senior: false };
  const coatInitialState = coatRef.current;
  const requirementsInitialState = {
    'child friendly': false,
    'dog friendly': false,
    'cat friendly': false,
    'house trained': false,
    'special needs': false,
  };
  const { response, isLoading } = useFetch(`types/${activeType.value}/breeds`);

  // updates the coat and breed initial states whenever a new type is selected
  useEffect(() => {
    if (activeType.value) {
      const type = activeType.value.toLowerCase();
      coatRef.current = typeData[type].coats;
    }

    if (response) {
      breedRef.current = {};
      for (const breed of response.breeds) {
        breedRef.current[breed.name] = false;
      }
    }
  }, [activeType, pageSelected, response]);

  useEffect(() => {
    console.log(activeFilters);
  }, [activeFilters]);

  switch (pageSelected) {
    case FILTER_PAGES.TYPE:
      filterPage = <FilterType />;
      break;
    case FILTER_PAGES.BREED:
      filterPage = <FilterCheckbox initialState={breedRef.current} isLoading={isLoading} breed />;
      break;
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
      {dropdownOpen === 'FILTER' && <div className={classes.dropdown}>{filterPage}</div>}
    </div>
  );
}

export default ResultsFilter;
