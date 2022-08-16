import { useDispatch } from 'react-redux';
import { FILTER_PAGES, filterActions } from '../../../store/filter';

import classes from './styles/FilterWrapper.module.css';

function FilterWrapper(props) {
  const dispatch = useDispatch();

  function backClickHandler() {
    dispatch(filterActions.changePage(FILTER_PAGES.HOME));
  }

  const backButton = (
    <button className={classes.back} onClick={backClickHandler}>
      Back
    </button>
  );

  return (
    <>
      <div className={classes.header}>
        <p className={classes.title}>{props.title}</p>
        {!props.home && backButton}
      </div>
      {props.children}
    </>
  );
}

export default FilterWrapper;
