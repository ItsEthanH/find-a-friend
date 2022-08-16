import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../../store/ui';

import classes from './styles/ResultsFilterButton.module.css';

function ResultsFilterButton() {
  const [quantity, setQuantity] = useState(0);
  const activeFilters = useSelector((state) => state.filter.activeFilters);
  const dropdownOpen = useSelector((state) => state.ui.resultsDropdownOpen);
  const dispatch = useDispatch();

  function filterButtonHandler() {
    dispatch(uiActions.selectResultsDropdown({ dropdown: 'FILTER' }));
  }

  useEffect(() => {
    setQuantity(0);
    const filterCategories = Object.keys(activeFilters);

    for (const filter of filterCategories) {
      const fitlersActive = Object.keys(activeFilters[filter]).length;
      setQuantity((prevQty) => prevQty + fitlersActive);
    }
  }, [activeFilters]);

  return (
    <button className={classes.toggle} onClick={filterButtonHandler}>
      {quantity === 0 && <p>Filters</p>}
      {quantity > 0 && <p>Filters ({quantity} selected)</p>}
      {dropdownOpen === 'FILTER' ? <p>&#11165;</p> : <p>&#11167;</p>}
    </button>
  );
}

export default ResultsFilterButton;
