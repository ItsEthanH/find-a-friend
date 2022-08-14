import classes from './styles/FilterHome.module.css';

import FilterPageHeader from '../FilterPageHeader';

function FilterHome(props) {
  function selectPageHandler(page) {
    props.onSelect(page);
  }

  return (
    <>
      <FilterPageHeader title="Filters" home />
      <li>
        <button className={classes.button} onClick={selectPageHandler.bind(null, 'type')}>
          Type
        </button>
      </li>
      <hr className={classes.divider} />

      <li>
        <button className={classes.button} onClick={selectPageHandler.bind(null, 'breed')}>
          Breed
        </button>
      </li>
      <hr className={classes.divider} />

      <li>
        <button className={classes.button} onClick={selectPageHandler.bind(null, 'distance')}>
          Distance
        </button>
      </li>
      <hr className={classes.divider} />

      <li>
        <button className={classes.button} onClick={selectPageHandler.bind(null, 'GENDER')}>
          Gender
        </button>
      </li>
      <hr className={classes.divider} />

      <li>
        <button className={classes.button} onClick={selectPageHandler.bind(null, 'age')}>
          Age
        </button>
      </li>
      <hr className={classes.divider} />

      <li>
        <button className={classes.button} onClick={selectPageHandler.bind(null, 'coat')}>
          Coat
        </button>
      </li>
      <hr className={classes.divider} />

      <li>
        <button className={classes.button} onClick={selectPageHandler.bind(null, 'requirements')}>
          Requirements
        </button>
      </li>
    </>
  );
}

export default FilterHome;
