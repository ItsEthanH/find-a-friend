import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './styles/SearchAnimalsSearchbar.module.css';

function SearchAnimalsSearchbar(props) {
  const locationRef = useRef();
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();

    const locationValue = locationRef.current.value.replace(' ', '-');
    navigate(`/results/animals/location=${locationValue}`);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler} aria-label={props['form-name']}>
      <div className={classes.entry}>
        <label htmlFor={props['search-name']}>
          <img src={props['search-icon']} alt={props['search-name']} />
        </label>
        <input
          placeholder={props['search-placeholder']}
          id={props['search-name']}
          name={props['search-name']}
          type="text"
          aria-label={props['search-placeholder']}
          ref={locationRef}
        />
      </div>
      <div className={classes.divider} />
      <div className={classes.entry}>
        <label htmlFor={props['filter-name']}>
          <img src={props['filter-icon']} alt={props['filter-name']} />
        </label>
        <select
          placeholder={props['filter-placeholder']}
          id={props['filter-name']}
          name={props['filter-name']}
          type="text"
          aria-label={props['filter-placeholder']}
        >
          <option>1</option>
          <option>1</option>
          <option>1</option>
        </select>
      </div>
    </form>
  );
}

export default SearchAnimalsSearchbar;
