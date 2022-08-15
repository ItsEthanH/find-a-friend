import { useDispatch } from 'react-redux';
import { FILTER_PAGES, filterActions } from '../../../../store/filter';

import classes from './styles/OptionWrapper.module.css';

function OptionWrapper(props) {
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
      <ul className={classes.options}>{props.children}</ul>
    </>
  );
}

export default OptionWrapper;
