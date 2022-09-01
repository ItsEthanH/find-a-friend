import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// useFetch is used to make GET requests to the Petfinder API, as long as an endpoint is given
// the only POST request needed is to get Bearer tokens from the API. this is handled in the AppContext.js file.
function useFetch(endpoint) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const token = useSelector((state) => state.auth.token);

  const url = 'https://api.petfinder.com/v2/' + endpoint;

  useEffect(() => {
    async function sendRequest() {
      if (endpoint.includes('undefined')) return;

      setResponse(null);
      setIsLoading(true);

      const options = { headers: { Authorization: `Bearer ${token}` } };
      const response = await fetch(url, options);

      if (!response.ok) {
        setIsLoading(false);
        setResponse(null);
        setError(response);

        console.group('Fetch Error');
        console.log(response);
        console.groupEnd();
        return;
      }

      const data = await response.json();

      setResponse(data);
      setIsLoading(false);
      setError(null);
    }

    sendRequest();
  }, [url, endpoint, token]);

  return { response, isLoading, error };
}

export default useFetch;
