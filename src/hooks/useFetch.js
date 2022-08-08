import { useState, useEffect } from 'react';

// useFetch is used to make GET requests to the Petfinder API, as long as an endpoint is given
// the only POST request needed is to get Bearer tokens from the API. this is handled in the AppContext.js file.[]
function useFetch(endpoint) {
  const url = 'https://api.petfinder.com/v2/' + endpoint;

  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function sendRequest() {
      const response = await fetch(url);

      if (!response.ok) {
        throw Error('Something went wrong!');
      }

      const data = await response.json();
      setResponse(data);
    }

    try {
      sendRequest();
    } catch (err) {
      setError(err.message);
      console.log(err);
      return;
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  return { response, isLoading, error };
}

export default useFetch;
