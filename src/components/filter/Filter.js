import { useState, useEffect } from 'react';
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

  const [breeds, setBreeds] = useState();
  const [coats, setCoats] = useState();

  const dropdownOpen = useSelector((state) => state.ui.resultsDropdownOpen);
  const pageSelected = useSelector((state) => state.filter.pageSelected);

  const filterState = useSelector((state) => state.filter);
  const activeType = filterState.activeFilters[FILTER_PAGES.TYPE].value;

  // initial states for each filter - each object gets mapped to a template filter where all state can be handled
  const initialStates = {
    Breed: breeds,
    Distance: { value: 100 },
    Gender: { male: false, female: false },
    Age: { baby: false, young: false, adult: false, senior: false },
    Coat: coats,
    Requirements: {
      'child friendly': false,
      'dog friendly': false,
      'cat friendly': false,
      'house trained': false,
      'special needs': false,
    },
  };

  const { response } = useFetch(`types/${activeType}/breeds`);

  useEffect(() => {
    if (response) {
      let newBreeds = {};
      for (const breed of response.breeds) {
        newBreeds[breed.name] = false;
      }

      setBreeds(newBreeds);
    }

    if (activeType) setCoats(typeData[activeType].coats);
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

  const mobileStyles = `${classes.mobile} ${props.searchbar ? classes.searchbar : undefined}`;
  const mobileFilter = (
    <div className={mobileStyles}>
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
