import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './styles/FilterButtonMobile.module.css';
import { FILTER_PAGES } from '../../store/filter';
import { filterActions } from '../../store/filter';
import { uiActions } from '../../store/ui';

function FilterButtonMobile(props) {
  const [quantity, setQuantity] = useState(0);
  const activeFilters = useSelector((state) => state.filter.activeFilters);
  const dropdownOpen = useSelector((state) => state.ui.resultsDropdownOpen);
  const dispatch = useDispatch();

  function filterButtonHandler() {
    if (dropdownOpen === 'FILTER') {
      dispatch(uiActions.selectResultsDropdown({ dropdown: null }));
    } else {
      dispatch(uiActions.selectResultsDropdown({ dropdown: 'FILTER' }));
    }
  }

  useEffect(() => {
    setQuantity(0);
    const filterCategories = Object.keys(activeFilters);

    for (const filter of filterCategories) {
      const fitlersActive = Object.keys(activeFilters[filter]).length;
      setQuantity((prevQty) => prevQty + fitlersActive);
    }
  }, [activeFilters]);

  useEffect(() => {
    return () => {
      if (!dropdownOpen) {
        dispatch(filterActions.changePage({ page: FILTER_PAGES.HOME }));
      }
    };
  }, [dispatch, dropdownOpen]);

  return (
    <>
      {!props.desktop && (
        <button className={classes.toggle} onClick={filterButtonHandler}>
          {quantity === 0 && <p>Filters</p>}
          {quantity > 0 && <p>Filters ({quantity} selected)</p>}
          <p className={classes.handle}>{dropdownOpen === 'FILTER' ? '-' : '+'}</p>
        </button>
      )}
    </>
  );
}

export default FilterButtonMobile;
