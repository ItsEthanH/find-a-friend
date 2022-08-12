import { useParams, useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import ResultsCard from './ResultsCard';

import classes from './styles/ResultsPage.module.css';
import DUMMY_DATA from './__DUMMY_DATA__';
import formatLocationForAPI from '../../util/formatLocationForAPI';
import noImageFound from '../../assets/images/results/no-image-found.png';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

function _ResultsPage() {
  const params = useParams();
  const location = useLocation();
  const address = formatLocationForAPI(params.queryParams);

  const breadcrumbs = [
    { link: '/', text: 'Home' },
    { link: '/search', text: 'Search Animals' },
    { link: location.pathname, text: 'Results' },
  ];

  const requestEndpoint = `${params.category}?${address}`;
  // const { response, isLoading, error } = useFetch(requestEndpoint);

  function renderCards() {
    let photo = noImageFound;

    const cards = DUMMY_DATA.animals.map((pet) => {
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
    });

    return cards;
  }

  return (
    <main className={classes.results}>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h2>Filters</h2>
      <h2>Sort</h2>
      <section className={classes.cards}>{DUMMY_DATA && renderCards()}</section>
    </main>
  );
}

export default _ResultsPage;
