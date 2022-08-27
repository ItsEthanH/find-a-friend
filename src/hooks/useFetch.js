import { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

// useFetch is used to make GET requests to the Petfinder API, as long as an endpoint is given
// the only POST request needed is to get Bearer tokens from the API. this is handled in the AppContext.js file.
function useFetch(endpoint) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.auth.token);

  const url = 'https://api.petfinder.com/v2/' + endpoint;
  const options = useMemo(() => {
    return { headers: { Authorization: `Bearer ${token}` } };
  }, [token]);

  useEffect(() => {
    async function sendRequest() {
      setResponse(null);
      setIsLoading(true);

      if (endpoint.includes('undefined')) return;
      const response = await fetch(url, options);

      if (!response.ok) {
        throw Error('Something went wrong!');
      }

      const data = await response.json();

      setResponse(data);
      setIsLoading(false);
      console.log(data);
    }

    try {
      sendRequest();
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }, [url, options, endpoint]);

  return { response, isLoading, error };
}

export default useFetch;
