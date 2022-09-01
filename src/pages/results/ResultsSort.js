import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui';

import classes from './styles/ResultsSort.module.css';

function ResultsSort(props) {
  const { isDesktop, sortOptions, sort, setSort } = props;

  const dispatch = useDispatch();
  const dropdownOpen = useSelector((state) => state.ui.resultsDropdownOpen);

  function sortButtonHandler() {
    if (dropdownOpen === 'SORT') {
      dispatch(uiActions.selectResultsDropdown({ dropdown: null }));
    } else {
      dispatch(uiActions.selectResultsDropdown({ dropdown: 'SORT' }));
    }
  }

  function selectionHandler(event) {
    setSort(event.target.id);
    dispatch(uiActions.selectResultsDropdown({ dropdown: null }));
  }

  const renderedOptions = Object.keys(sortOptions).map((option) => {
    return (
      <li key={option} className={classes.option}>
        <button
          id={option}
          className={sort === sortOptions[option] ? classes.selected : undefined}
          onClick={selectionHandler}
        >
          {sortOptions[option]}
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
          <p className={classes['button-text']}>{sortOptions[sort]}</p>
          <p className={classes.handle}>{handle}</p>
        </button>
        {isDesktop && dropdownOpen === 'SORT' && <hr />}
        {dropdownOpen === 'SORT' && <ul className={classes.dropdown}>{renderedOptions}</ul>}
      </div>
    </div>
  );
}

export default ResultsSort;
