import { useLocation, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import OrgMap from './OrgMap';
import OrgInfo from './OrgInfo';
import OrgHours from './OrgHours';
import OrgPets from './OrgPets';
import Breadcrumbs from '../../components/text/Breadcrumbs';

import classes from './styles/OrgViewPage.module.css';
import loadingSpinner from '../../assets/svgs/loading.svg';

function _OrgViewPage(props) {
  const params = useParams();
  const location = useLocation();
  const { response, isLoading, error } = useFetch(`/organizations/${params.id}`);

  const breadcrumbs = [
    { link: '/', text: 'Home' },
    { link: '/organisations/1', text: 'Search Organisations' },
    { link: location.pathname, text: 'Organisation' },
  ];

  const addressArray =
    response &&
    [
      response.organization.address.address1,
      response.organization.address.address2,
      `${response.organization.address.city}, ${response.organization.address.state}`,
      response.organization.address.postcode,
    ].filter((line) => line);

  const orgViewComponent = response && (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <OrgMap address={addressArray.join(' ')} />
      <OrgInfo
        name={response.organization.name}
        email={response.organization.email}
        phone={response.organization.phone}
        website={response.organization.website}
        address={addressArray}
        description={response.organization.mission_statement}
      />
      <OrgHours hours={response.organization.hours}></OrgHours>
      <OrgPets link={response.organization._links.animals.href.substring(3)} />
    </>
  );

  const loadingComponent = isLoading && <img src={loadingSpinner} alt="" />;

  const errorComponent = error && (
    <p>There was an error fetching this organisation. Please try again later</p>
  );

  return (
    <main className={`${classes.main} ${error || isLoading ? classes.info : ''}`}>
      {orgViewComponent}
      {loadingComponent}
      {errorComponent}
    </main>
  );
}

export default _OrgViewPage;
