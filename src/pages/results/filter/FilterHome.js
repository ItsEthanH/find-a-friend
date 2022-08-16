import { useDispatch, useSelector } from 'react-redux';
import { FILTER_PAGES, filterActions } from '../../../store/filter';

import OptionWrapper from './FilterWrapper';

import classes from './styles/Filter.module.css';

function FilterHome() {
  const dispatch = useDispatch();
  const activeFilters = useSelector((state) => state.filter.activeFilters);

  const renderedOptions = Object.keys(FILTER_PAGES).map((page) => {
    const pageName = FILTER_PAGES[page];

    // skip the home value as it should not appear in the filter options
    if (pageName === 'Home') {
      return false;
    }

    let quantity = Object.keys(activeFilters[pageName]).length;
    function selectPageHandler(event) {
      dispatch(filterActions.changePage({ page: event.target.id }));
    }

    return (
      <>
        <li key={pageName}>
          <button className={classes.home} id={pageName} onClick={selectPageHandler}>
            {pageName}
            {quantity > 0 && <p className={classes.quantity}>{quantity}</p>}
          </button>
          {pageName !== FILTER_PAGES.REQUIREMENTS && <hr />}
        </li>
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
