import { useDispatch, useSelector } from 'react-redux';
import { filterActions, FILTER_PAGES } from '../../store/filter';
import { uiActions } from '../../store/ui';
import classes from './styles/FilterButtonDesktop.module.css';

function FilterButtonDesktop(props) {
  const dispatch = useDispatch();
  const dropdownOpen = useSelector((state) => state.ui.resultsDropdownOpen);
  const activeFilter = useSelector((state) => state.filter.activeFilters[props.filter]);
  const pageSelected = useSelector((state) => state.filter.pageSelected);

  function filterButtonHandler() {
    if (props.filter === pageSelected && dropdownOpen === 'FILTER') {
      dispatch(uiActions.selectResultsDropdown({ dropdown: null }));
      dispatch(filterActions.changePage({ page: null }));
    } else {
      dispatch(uiActions.selectResultsDropdown({ dropdown: 'FILTER' }));
      dispatch(filterActions.changePage({ page: props.filter }));
    }
  }

  // updates the text of the filter button whenever a filter is changed.
  // seperates a list by a comma and sets uppercase characters where neede
  function createButtonText() {
    const keys = Object.keys(activeFilter);

    if (keys.length <= 0) return 'All';
    if (typeof activeFilter[keys[0]] === 'number') return `Within ${activeFilter[keys]} miles`;
    if (typeof activeFilter[keys[0]] === 'boolean') {
      let returnedFilter = '';
      keys.forEach((filter, index) => {
        returnedFilter += filter.charAt(0).toUpperCase() + filter.substring(1);
        if (index !== keys.length - 1) returnedFilter += ', ';
      });
      return returnedFilter;
    }
    return activeFilter[keys].charAt(0).toUpperCase() + activeFilter[keys].substring(1);
  }

  const buttonText = createButtonText();

  console.log(props.isDisabled);

  return (
    <div className={classes.wrapper}>
      <p className={classes.heading}>{props.filter}</p>
      <div className={classes.button}>
        <button disabled={props.isDisabled} onClick={filterButtonHandler}>
          <p>{buttonText}</p>
          {pageSelected === props.filter ? <p>-</p> : <p>+</p>}
        </button>
        {pageSelected === props.filter && dropdownOpen === 'FILTER' && (
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
