import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import classes from './styles/ResultsPage.module.css';

function _ResultsPage() {
  const params = useParams();
  const requestEndpoint = `${params.category}?${params.queryParams.replace('-', ' ')}`;
  console.log(requestEndpoint);

  const { response, isLoading, error } = useFetch(requestEndpoint);

  return <div>{}</div>;
}

export default _ResultsPage;
