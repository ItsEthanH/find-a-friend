import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui';

import classes from './styles/ResultsSort.module.css';

function ResultsSort(props) {
  const { isDesktop } = props;
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
      <li key={index} className={classes.option}>
        <button
          key={index}
          id={index}
          className={selectedOption === option && classes.selected}
          onClick={selectionHandler}
        >
          {option}
        </button>
      </li>
    );
  });

  const handle = dropdownOpen === 'SORT' ? '-' : '+';
  const styles = `${classes.sort} ${isDesktop && classes.desktop}`;
  return (
    <div className={styles}>
      {isDesktop && <p className={classes.heading}>Sort</p>}

      <div className={classes.button}>
        <button onClick={sortButtonHandler}>
          <p className={classes['button-text']}>{selectedOption}</p>
          <p className={classes.handle}>{handle}</p>
        </button>
        {isDesktop && dropdownOpen === 'SORT' && <hr />}
        {dropdownOpen === 'SORT' && <ul className={classes.dropdown}>{renderedOptions}</ul>}
      </div>
    </div>
  );

  // return (
  //   <>
  //     <div className={styles}>
  //       <button className={classes.toggle} onClick={sortButtonHandler}>
  //         <p>{selectedOption}</p>
  //         {dropdownOpen === 'SORT' ? <p>-</p> : <p>+</p>}
  //       </button>
  //       {dropdownOpen === 'SORT' && (
  //         <ul className={classes.options}>
  //           <p>Sort by:</p>
  //           {renderedOptions}
  //         </ul>
  //       )}
  //     </div>
  //   </>
  // );
}

export default ResultsSort;
