import classes from './styles/LocationInput.module.css';

function LocationInput(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props['name']}>
        <img src={props['icon']} alt={props['name']} />
      </label>
      <input
        placeholder={props['placeholder']}
        id={props['name']}
        name={props['name']}
        aria-label={props['placeholder']}
      />
    </div>
  );
}

export default LocationInput;
