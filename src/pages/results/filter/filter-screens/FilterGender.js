import OptionWrapper from './OptionWrapper';

import classes from './styles/FilterScreen.module.css';

function FilterGender(props) {
  return (
    <OptionWrapper title="Gender">
      <li className={`${classes.option} ${classes.checkbox}`}>
        <label htmlFor="Male">Male</label>
        <input type="checkbox" id="Male" name="male" />
      </li>
      <li className={`${classes.option} ${classes.checkbox}`}>
        <label htmlFor="Female">Female</label>
        <input type="checkbox" id="Female" name="Female" />
      </li>
    </OptionWrapper>
  );
}

export default FilterGender;
