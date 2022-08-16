import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui';

import classes from './styles/ResultsSort.module.css';

function ResultsSort() {
  const sortOptions = [
    'Date Posted (Newest)',
    'Date Posted (Oldest)',
    'Distance (Closest)',
    'Distance (Furthest)',
    'Random',
  ];

  const dispatch = useDispatch();
  const dropdownOpen = useSelector((state) => state.ui.resultsDropdownOpen);
  const [selectedOption, setSelectedOption] = useState(sortOptions[0]);

  function sortButtonHandler() {
    dispatch(uiActions.selectResultsDropdown({ dropdown: 'SORT' }));
  }

  function selectionHandler(event) {
    setSelectedOption(event.target.textContent);
    dispatch(uiActions.selectResultsDropdown({ dropdown: null }));
  }

  const renderedOptions = sortOptions.map((option, index) => {
    return (
      <li key={index}>
        <button
          key={index}
          id={index}
          className={selectedOption === option ? classes.selected : ''}
          onClick={selectionHandler}
        >
          {option}
        </button>
      </li>
    );
  });

  return (
    <div className={classes.sort}>
      <button className={classes.toggle} onClick={sortButtonHandler}>
        <p>{selectedOption}</p>
        {dropdownOpen === 'SORT' ? <p>&#11165;</p> : <p>&#11167;</p>}
      </button>
      {dropdownOpen === 'SORT' && (
        <ul className={classes.options}>
          <p>Sort by:</p>
          {renderedOptions}
        </ul>
      )}
    </div>
  );
}

export default ResultsSort;
