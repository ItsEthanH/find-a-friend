import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import formatLocationForAPI from '../../util/formatLocationForAPI';

import classes from './styles/ResultsPage.module.css';

function _ResultsPage() {
  const params = useParams();
  const location = formatLocationForAPI(params.queryParams);

  const requestEndpoint = `${params.category}?${location}`;
  const { response, isLoading, error } = useFetch(requestEndpoint);

  console.log(response);

  return <div>hi</div>;
}

export default _ResultsPage;
