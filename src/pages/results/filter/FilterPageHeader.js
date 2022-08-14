import classes from './styles/FilterPageHeader.module.css';

function FilterPageHeader(props) {
  function backClickHandler() {
    props.onClick();
  }

  return (
    <div className={classes.header}>
      <p className={classes.title}>{props.title}</p>
      {!props.home && (
        <button className={classes.back} onClick={backClickHandler}>
          Back
        </button>
      )}
    </div>
  );
}

export default FilterPageHeader;
