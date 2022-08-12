import { useState } from 'react';

import classes from './styles/ResultsSort.module.css';

function ResultsSort(props) {
  const sortOptions = [
    'Date Posted (Newest)',
    'Date Posted (Oldest)',
    'Distance (Closest)',
    'Distance (Furthest)',
    'Random',
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelected] = useState(sortOptions[0]);

  function toggleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  function selectionHandler(event) {
    setSelected(event.target.textContent);
  }

  const renderedOptions = sortOptions.map((option, index) => {
    console.log(option.id);

    return (
      <li key={index}>
        <button
          key={index}
          id={index}
          className={selectedOption === option ? classes.selected : ''}
          onClick={selectionHandler}
        >
          {option}
        </button>
      </li>
    );
  });

  return (
    <div className={classes.sort}>
      <button className={classes.toggle} onClick={toggleOpen}>
        <p>Sort By: {selectedOption}</p>
        {isOpen ? <p>&#11165;</p> : <p>&#11167;</p>}
      </button>
      {isOpen && (
        <ul className={classes.options}>
          <p>Sort by:</p>
          {renderedOptions}
        </ul>
      )}
    </div>
  );
}

export default ResultsSort;
