import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';

import FilterDropdownHome from './FilterDropdownHome';
import FilterDropdownType from './FilterDropdownType';
import FilterTemplateRange from './FilterTemplateRange';
import FilterTemplateCheckbox from './FilterTemplateCheckbox';
import FilterButton from './FilterButton';

import classes from './styles/Filter.module.css';
import typeData from '../../util/typeData';
import { FILTER_PAGES } from '../../store/filter';

function Filter() {
  let filterPage;
  const breedRef = useRef(null);
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

  switch (pageSelected) {
    case FILTER_PAGES.TYPE:
      filterPage = <FilterDropdownType />;
      break;
    case FILTER_PAGES.BREED:
      filterPage = (
        <FilterTemplateCheckbox initialState={breedRef.current} isLoading={isLoading} breed />
      );
      break;
    case FILTER_PAGES.DISTANCE:
      filterPage = <FilterTemplateRange initialState={distanceInitialState} min={10} max={500} />;
      break;
    case FILTER_PAGES.GENDER:
      filterPage = <FilterTemplateCheckbox initialState={genderInitialState} />;
      break;
    case FILTER_PAGES.AGE:
      filterPage = <FilterTemplateCheckbox initialState={ageInitialState} />;
      break;
    case FILTER_PAGES.COAT:
      filterPage = <FilterTemplateCheckbox initialState={coatInitialState} />;
      break;
    case FILTER_PAGES.REQUIREMENTS:
      filterPage = <FilterTemplateCheckbox initialState={requirementsInitialState} />;
      break;

    default:
      filterPage = <FilterDropdownHome />;
      break;
  }

  return (
    <div className={classes.filter}>
      <FilterButton />
      {dropdownOpen === 'FILTER' && <div className={classes.dropdown}>{filterPage}</div>}
    </div>
  );
}

export default Filter;
