import classes from './styles/Pagination.module.css';

function Pagination({ page, totalPages, onChange }) {
  function changePageHandler(event) {
    if (
      (event.target.id === 'PREV' && page === 1) ||
      (event.target.id === 'NEXT' && page === totalPages)
    )
      return;

    let newPage = +page;

    if (event.target.id === 'NEXT') newPage += 1;
    if (event.target.id === 'PREV') newPage -= 1;

    onChange(newPage);
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
