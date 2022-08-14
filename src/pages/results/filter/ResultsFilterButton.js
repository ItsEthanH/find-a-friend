import classes from './styles/ResultsFilterButton.module.css';

function ResultsFilterButton(props) {
  return (
    <button className={classes.toggle} onClick={props.toggleOpen}>
      <p>Filters (2 selected)</p>
      {props.isOpen ? <p>&#11165;</p> : <p>&#11167;</p>}
    </button>
  );
}

export default ResultsFilterButton;
