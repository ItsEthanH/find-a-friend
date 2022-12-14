import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import useFilterUrl from '../../hooks/useFilterUrl';

import FilterDesktop from './FilterDesktop';
import FilterDropdownHome from './FilterDropdownHome';
import FilterDropdownType from './FilterDropdownType';
import FilterTemplateRange from './FilterTemplateRange';
import FilterTemplateCheckbox from './FilterTemplateCheckbox';
import FilterButtonMobile from './FilterButtonMobile';

import classes from './styles/Filter.module.css';
import animalTypeData from '../../data/animalTypeData';
import { filterActions, FILTER_PAGES } from '../../store/filter';
import { uiActions } from '../../store/ui';

function Filter(props) {
  const { isDesktop, searchbar } = props;
  let filterPage;

  const mobileDropdownRef = useRef();
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createUrl = useFilterUrl();

  const dropdownOpen = useSelector((state) => state.ui.resultsDropdownOpen);
  const pageSelected = useSelector((state) => state.filter.pageSelected);
  const activeType = useSelector((state) => state.filter.activeFilters[FILTER_PAGES.TYPE].value);

  const { response, isLoading } = useFetch(`types/${activeType}/breeds`);

  function handleClickOutside(event) {
    if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
      dispatch(uiActions.selectResultsDropdown({ dropdown: null }));
    }
  }

  function applyFilters() {
    if (!activeType) return;

    const url = createUrl();

    dispatch(uiActions.selectResultsDropdown({ dropdown: null }));
    dispatch(filterActions.changePage({ page: FILTER_PAGES.HOME }));
    navigate(`/results/${params.location}/1/${params.sort}/${url}`);
  }

  function clearFilters() {
    dispatch(filterActions.deleteAllFilters());
    navigate(`/results/${params.location}/1/${params.sort}`);
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  useEffect(() => {
    if (!response || !activeType) return;

    dispatch(
      filterActions.changeAnimalType({
        breeds: response.breeds,
        coats: animalTypeData[activeType].coats,
      })
    );
  }, [response, activeType, dispatch]);

  switch (pageSelected) {
    case FILTER_PAGES.HOME:
      filterPage = <FilterDropdownHome onApply={applyFilters} searchbar={props.searchbar} />;
      break;
    case FILTER_PAGES.TYPE:
      filterPage = <FilterDropdownType />;
      break;
    case FILTER_PAGES.DISTANCE:
      filterPage = <FilterTemplateRange min={0} max={500} />;
      break;
    default:
      filterPage = <FilterTemplateCheckbox isLoading={isLoading} />;
      break;
  }

  const mobileStyles = `${classes.mobile} ${searchbar ? classes.searchbar : undefined}`;
  const mobileFilter = (
    <div data-testid="mobile-filter" ref={mobileDropdownRef} className={mobileStyles}>
      <FilterButtonMobile />
      {dropdownOpen === 'FILTER' && <div className={classes.dropdown}>{filterPage}</div>}
    </div>
  );

  const desktopFilter = (
    <div data-testid="desktop-filter" className={classes.desktop}>
      <FilterDesktop isLoading={isLoading} onApply={applyFilters} onClear={clearFilters} />
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
