import { useDispatch } from 'react-redux';
import { FILTER_PAGES, filterActions } from '../../../../store/filter';

import OptionWrapper from './OptionWrapper';

import classes from './styles/FilterHome.module.css';

function FilterHome() {
  const dispatch = useDispatch();

  function selectPageHandler(event) {
    console.log(event.target.id);
    dispatch(filterActions.changePage({ page: event.target.id }));
  }

  const renderedOptions = Object.keys(FILTER_PAGES).map((page) => {
    const pageName = FILTER_PAGES[page];
    if (pageName === 'Home') {
      return false; // skip the home value as it should not appear in the filter options
    }

    return (
      <li key={pageName}>
        <button id={pageName} className={classes.button} onClick={selectPageHandler}>
          {pageName}
        </button>
      </li>
    );
  });

  return (
    <>
      <OptionWrapper title="Filters" home>
        {renderedOptions}
      </OptionWrapper>
    </>
  );
}

export default FilterHome;
