import classes from './styles/SearchAnimalsFilters.module.css';

function SearchAnimalsFilters(props) {
  return (
    <div className={classes.filter}>
      <label htmlFor={props.name}>
        <img src={props.icon} alt={props.name} />
      </label>
      <select
        placeholder={props.placeholder}
        id={props.name}
        name={props.name}
        aria-label={props.placeholder}
      >
        <option>1</option>
        <option>1</option>
        <option>1</option>
      </select>
    </div>
  );
}

export default SearchAnimalsFilters;
