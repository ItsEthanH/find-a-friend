import { useEffect, useRef, useMemo } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';

import FilterDropdownHome from './FilterDropdownHome';
import FilterDropdownType from './FilterDropdownType';
import FilterTemplateRange from './FilterTemplateRange';
import FilterTemplateCheckbox from './FilterTemplateCheckbox';
import FilterButtonMobile from './FilterButtonMobile';

import classes from './styles/Filter.module.css';
import typeData from '../../util/typeData';
import { FILTER_PAGES } from '../../store/filter';
import FilterDesktop from './FilterDesktop';

function Filter(props) {
  let filterPage;
  const isDesktop = props.isDesktop;

  const breedRef = useRef({});
  const coatRef = useRef({});
  const dropdownOpen = useSelector((state) => state.ui.resultsDropdownOpen);
  const pageSelected = useSelector((state) => state.filter.pageSelected);

  const activeFilters = useSelector((state) => state.filter.activeFilters);
  const activeType = useMemo(() => {
    if (activeFilters[FILTER_PAGES.TYPE].value) return activeFilters[FILTER_PAGES.TYPE];
    return { value: 'Dog' };
  }, [activeFilters]);

  // initial states for each filter - each object gets mapped to a template filter where all state can be handled
  const initialStates = {
    Breed: breedRef.current,
    Distance: { value: 100 },
    Gender: { male: false, female: false },
    Age: { baby: false, young: false, adult: false, senior: false },
    Coat: coatRef.current,
    Requirements: {
      'child friendly': false,
      'dog friendly': false,
      'cat friendly': false,
      'house trained': false,
      'special needs': false,
    },
  };

  const { response } = useFetch(`types/${activeType.value}/breeds`);

  // updates the coat and breed initial states whenever a new type is selected
  useEffect(() => {
    if (response) {
      breedRef.current = {};
      for (const breed of response.breeds) {
        breedRef.current[breed.name] = false;
      }
    }

    const type = activeType.value.toLowerCase();
    coatRef.current = typeData[type].coats;
  }, [activeType, response]);

  switch (pageSelected) {
    case FILTER_PAGES.HOME:
      filterPage = <FilterDropdownHome />;
      break;
    case FILTER_PAGES.TYPE:
      filterPage = <FilterDropdownType />;
      break;
    case FILTER_PAGES.DISTANCE:
      filterPage = <FilterTemplateRange initialState={initialStates.Distance} min={10} max={500} />;
      break;
    default:
      filterPage = (
        <FilterTemplateCheckbox initialState={initialStates[pageSelected]} page={pageSelected} />
      );
      break;
  }

  const mobileFilter = (
    <div className={classes.mobile}>
      <FilterButtonMobile />
      {dropdownOpen === 'FILTER' && <div className={classes.dropdown}>{filterPage}</div>}
    </div>
  );

  const desktopFilter = (
    <div className={classes.desktop}>
      <FilterDesktop initialStates={initialStates} />
    </div>
  );

  return (
    <>
      {!isDesktop && mobileFilter}
      {isDesktop && desktopFilter}
    </>
  );
}

export default Filter;
