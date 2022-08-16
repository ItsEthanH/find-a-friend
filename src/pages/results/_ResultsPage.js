import { useParams, useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import Breadcrumbs from '../../components/ui/Breadcrumbs';
import ResultsCard from './ResultsCard';
import ResultsSort from './ResultsSort';
import ResultsFilter from './filter/ResultsFilter';

import classes from './styles/ResultsPage.module.css';
import DUMMY_DATA from './__DUMMY_DATA__';
import formatLocationForAPI from '../../util/formatLocationForAPI';
import noImageFound from '../../assets/images/results/no-image-found.png';

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
      {DUMMY_DATA && (
        <>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <p className={classes.count}>
            We've found <span className="color-accent">{DUMMY_DATA.pagination.total_count}</span>{' '}
            results
          </p>

          <div className={classes.dropdowns}>
            <ResultsFilter />
            <ResultsSort />
          </div>
          <section className={classes.cards}>{renderCards()}</section>
        </>
      )}
    </main>
  );
}

export default _ResultsPage;
