import { useState } from 'react';

import ResultsFilterButton from './ResultsFilterButton';
import FilterHome from './filter-screens/FilterHome';
import FilterGender from './filter-screens/FilterGender';

import classes from './styles/ResultsFilter.module.css';

function ResultsFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState('HOME');

  function toggleFilterHandler() {
    setIsOpen((prevState) => !prevState);
  }

  function changePageHandler(page) {
    setSelectedPage(page);
  }

  return (
    <div className={classes.filter}>
      <ResultsFilterButton isOpen={isOpen} toggleOpen={toggleFilterHandler} />
      {isOpen && (
        <>
          <ul className={classes.options}>
            {selectedPage === 'HOME' && <FilterHome onSelect={changePageHandler} />}
            {selectedPage === 'GENDER' && (
              <FilterGender
                onSelect={changePageHandler}
                onBack={changePageHandler.bind(null, 'HOME')}
              />
            )}
          </ul>
        </>
      )}
    </div>
  );
}

export default ResultsFilter;
