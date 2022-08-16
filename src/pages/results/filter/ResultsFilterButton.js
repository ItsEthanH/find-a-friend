import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterActions } from '../../../store/filter';

import classes from './styles/ResultsFilterButton.module.css';

function ResultsFilterButton() {
  const [quantity, setQuantity] = useState(0);
  const activeFilters = useSelector((state) => state.filter.activeFilters);
  const isFiltersOpen = useSelector((state) => state.filter.isFiltersOpen);
  const dispatch = useDispatch();

  function filterButtonHandler() {
    dispatch(filterActions.toggleFilter());
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
      {isFiltersOpen ? <p>&#11165;</p> : <p>&#11167;</p>}
    </button>
  );
}

export default ResultsFilterButton;
