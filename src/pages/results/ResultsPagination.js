import { useParams, useNavigate } from 'react-router-dom';

import classes from './styles/ResultsPagination.module.css';

function ResultsPagination(props) {
  const { currentPage, totalPages } = props;

  const params = useParams();
  const navigate = useNavigate();

  function changePage(event) {
    let newPage = currentPage;
    const filterParams = params.filters ? `${params.filters}` : '';

    if (event.target.id === 'next' && currentPage !== totalPages) newPage += 1;
    if (event.target.id === 'prev' && currentPage !== 1) newPage = newPage -= 1;

    navigate(`/results/${params.location}/${newPage}/${params.sort}/${filterParams}`);
  }

  return (
    <section className={classes.pages}>
      <button id="prev" onClick={changePage}>
        Prev
      </button>
      <p>
        Page {currentPage} of {totalPages}
      </p>
      <button id="next" onClick={changePage}>
        Next
      </button>
    </section>
  );
}

export default ResultsPagination;
