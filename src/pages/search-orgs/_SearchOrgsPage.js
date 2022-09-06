import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import urlToAPI from '../../util/urlToAPI';

import SearchOrgsHero from './SearchOrgsHero';
import SearchOrgsResults from './SearchOrgsResults';

function SearchOrgsPage() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const formattedLocation = params.location && urlToAPI(params.location);

  const requestEndpointArray = [
    `${params.location ? `location=${formattedLocation}` : ''}`,
    `${params.shelterName ? `name=${params.shelterName}` : ''}`,
    `page=${params.page}`,
  ];

  const endpoint = requestEndpointArray.filter((item) => item).join('&');

  const { response, isLoading, error } = useFetch(`organizations?${endpoint}`);

  function pageChangeHandler(newPage) {
    const pageBeginsIndex = location.pathname.lastIndexOf('/');
    const slicedPath = location.pathname.substring(pageBeginsIndex, -location.pathname.length);
    navigate(`${slicedPath}/${newPage}`);
  }

  function searchSubmitHandler(location, shelterName) {
    let navParam = '';

    if (location.length !== 0) {
      navParam += `/location=${location.join('-')}`;
    }

    if (shelterName) {
      navParam += `/shelter=${shelterName}`;
    }

    navParam += `/1`;
    navigate(`/organisations${navParam}`);
  }

  return (
    <main>
      <SearchOrgsHero onSearch={searchSubmitHandler} />
      <SearchOrgsResults
        results={response && response.organizations}
        isLoading={isLoading}
        error={error}
        pagination={response && response.pagination}
        onPageChange={pageChangeHandler}
      />
    </main>
  );
}

export default SearchOrgsPage;
