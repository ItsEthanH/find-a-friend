import { useDispatch, useSelector } from 'react-redux';
import { filterActions, FILTER_PAGES } from '../../store/filter';
import { uiActions } from '../../store/ui';

import classes from './styles/FilterButtonDesktop.module.css';
import breedCoats from '../../data/breedCoats';

function FilterButtonDesktop(props) {
  const dispatch = useDispatch();
  const dropdownOpen = useSelector((state) => state.ui.resultsDropdownOpen);
  const activeFilter = useSelector((state) => state.filter.activeFilters[props.filter]);
  const pageSelected = useSelector((state) => state.filter.pageSelected);

  const buttonSelected = props.filter === pageSelected && dropdownOpen === 'FILTER';

  function filterButtonHandler() {
    if (buttonSelected) {
      dispatch(uiActions.selectResultsDropdown({ dropdown: null }));
      dispatch(filterActions.changePage({ page: FILTER_PAGES.HOME }));
    } else {
      dispatch(uiActions.selectResultsDropdown({ dropdown: 'FILTER' }));
      dispatch(filterActions.changePage({ page: props.filter }));
    }
  }

  // updates the text of the filter button whenever a filter is changed.
  function createButtonText() {
    const keys = Object.keys(activeFilter);
    const text = activeFilter[keys[0]];

    // if nothing is selected, show 'All'
    if (keys.length <= 0) return 'All';

    // if its a number, it is the distance filter, format appropriately
    if (parseInt(text)) return `Within ${activeFilter[keys]} miles`;

    // if its a boolean, take the key name, capitalise it and return a comma seperated string of the values
    if (typeof text === 'boolean') {
      let returnedFilter = '';

      keys.forEach((filter, index) => {
        const words = filter.split(' ');
        let formattedWord = '';
        words.forEach((word) => (formattedWord += word[0].toUpperCase() + word.substring(1) + ' '));

        returnedFilter += formattedWord.trim();
        if (index !== keys.length - 1) returnedFilter += ', ';
      });

      return returnedFilter;
    }

    // if none of the above apply, it's the type filter. return the formatted name from the breedCoats data structure
    return breedCoats[text].name;
  }

  const buttonText = createButtonText();

  return (
    <div className={classes.wrapper}>
      <p className={classes.heading}>{props.filter}</p>
      <div className={classes.button}>
        <button disabled={props.isDisabled} onClick={filterButtonHandler}>
          <p>{buttonText}</p>
          {buttonSelected ? <p>-</p> : <p>+</p>}
        </button>
        {buttonSelected && (
          <>
            <hr />
            {props.children}
          </>
        )}
      </div>
    </div>
  );
}

export default FilterButtonDesktop;
