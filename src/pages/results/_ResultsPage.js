import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import ResultsCard from './ResultsCard';

import classes from './styles/ResultsPage.module.css';
import DUMMY_DATA from './__DUMMY_DATA__';
import formatLocationForAPI from '../../util/formatLocationForAPI';

function _ResultsPage() {
  const params = useParams();
  const location = formatLocationForAPI(params.queryParams);

  const requestEndpoint = `${params.category}?${location}`;
  // const { response, isLoading, error } = useFetch(requestEndpoint);

  return (
    <main className={classes.results}>
      {DUMMY_DATA.animals.map((pet) => {
        let photo = 'test';

        if (pet.primary_photo_cropped !== null) {
          photo = pet.primary_photo_cropped.full;
        }

        return (
          <ResultsCard
            key={pet.id}
            id={pet.id}
            name={pet.name}
            image={photo}
            breed={pet.breeds.primary}
            distance={pet.distance.toFixed(0)}
            city={pet.contact.address.city}
            state={pet.contact.address.state}
          />
        );
      })}
    </main>
  );
}

export default _ResultsPage;
