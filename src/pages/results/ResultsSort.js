import { useState } from 'react';

import classes from './styles/ResultsSort.module.css';

function ResultsSort() {
  const sortOptions = [
    'Date Posted (Newest)',
    'Date Posted (Oldest)',
    'Distance (Closest)',
    'Distance (Furthest)',
    'Random',
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(sortOptions[0]);

  function toggleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  function selectionHandler(event) {
    setSelectedOption(event.target.textContent);
    setIsOpen(false);
  }

  const renderedOptions = sortOptions.map((option, index) => {
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
        <p>{selectedOption}</p>
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
