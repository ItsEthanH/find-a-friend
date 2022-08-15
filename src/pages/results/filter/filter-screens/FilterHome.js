import { useDispatch, useSelector } from 'react-redux';
import { FILTER_PAGES, filterActions } from '../../../../store/filter';

import OptionWrapper from './OptionWrapper';

import classes from './styles/FilterScreen.module.css';

function FilterHome() {
  const dispatch = useDispatch();
  const appliedFilters = useSelector((state) => state.filter.filters);

  const renderedOptions = Object.keys(FILTER_PAGES).map((page) => {
    const pageName = FILTER_PAGES[page];
    let quantity = '';

    // skip the home value as it should not appear in the filter options
    if (pageName === 'Home') {
      return false;
    }

    if (appliedFilters[pageName]) {
      quantity = appliedFilters[pageName].filterQuantity;
    }

    function selectPageHandler(event) {
      dispatch(filterActions.changePage({ page: event.target.id }));
    }

    return (
      <>
        <li key={pageName}>
          <button className={classes.home} id={pageName} onClick={selectPageHandler}>
            {pageName}
            {quantity && <p className={classes.quantity}>{quantity}</p>}
          </button>
        </li>
        {pageName !== FILTER_PAGES.REQUIREMENTS && <hr />}
      </>
    );
  });

  return (
    <>
      <OptionWrapper title="Filters" home>
        <ul className={classes.options}>{renderedOptions}</ul>
      </OptionWrapper>
    </>
  );
}

export default FilterHome;
