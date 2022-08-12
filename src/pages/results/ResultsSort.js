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
  const [buttonText, setButtonText] = useState('Date Posted (Newest)');

  function toggleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  function selectionHandler(event) {}

  return (
    <div className={classes.sort}>
      <button className={classes.toggle} onClick={toggleOpen}>
        <p>Sort By: {buttonText}</p>
        {isOpen ? <p>&#11165;</p> : <p>&#11167;</p>}
      </button>
      {isOpen && (
        <ul className={classes.options}>
          <p>Sort by:</p>
          {sortOptions.map((option, index) => (
            <li key={index}>
              <button id={index} onClick={selectionHandler}>
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ResultsSort;
