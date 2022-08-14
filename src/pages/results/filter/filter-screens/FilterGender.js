import FilterPageHeader from '../FilterPageHeader';

import classes from './styles/FilterScreen.module.css';

function FilterGender(props) {
  function selectGenderHandler(page) {
    return;
  }

  function backClickHandler() {
    props.onBack();
  }

  return (
    <>
      <FilterPageHeader title="Gender" onClick={backClickHandler} />
      <li className={`${classes.option} ${classes.checkbox}`}>
        <label htmlFor="Male">Male</label>
        <input
          type="checkbox"
          id="Male"
          name="male"
          onClick={selectGenderHandler.bind(null, 'male')}
        />
      </li>
      <li className={`${classes.option} ${classes.checkbox}`}>
        <label htmlFor="Female">Female</label>
        <input
          type="checkbox"
          id="Female"
          name="Female"
          onClick={selectGenderHandler.bind(null, 'female')}
        />
      </li>
    </>
  );
}

export default FilterGender;
