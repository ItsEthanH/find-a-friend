import classes from './styles/Pagination.module.css';

function Pagination({ page, totalPages, onChange }) {
  function changePageHandler(event) {
    onChange(event);
  }

  return (
    <div className={classes.pagination}>
      <button id="PREV" onClick={changePageHandler}>
        Prev
      </button>
      <p>
        Page {page} of {totalPages}
      </p>
      <button id="NEXT" onClick={changePageHandler}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
