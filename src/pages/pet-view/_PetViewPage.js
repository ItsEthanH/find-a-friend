import { useParams, useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import Breadcrumbs from '../../components/text/Breadcrumbs';
import PetImages from './PetImages';
import PetInformation from './PetInformation';
import PetDetails from './PetDetails';
import PetAdoption from './PetAdoption';

import classes from './styles/PetViewPage.module.css';
import noImageFound from '../../assets/images/pet-view/no-images-found.png';
import loadingSpinner from '../../assets/svgs/loading.svg';

import neuteredIcon from '../../assets/svgs/pet-view/neutered.svg';
import houseTrainedIcon from '../../assets/svgs/pet-view/house-trained.svg';
import declawedIcon from '../../assets/svgs/pet-view/declawed.svg';
import specialNeedsIcon from '../../assets/svgs/pet-view/special-needs.svg';
import vaccinatedIcon from '../../assets/svgs/pet-view/vaccinated.svg';

import childrenIcon from '../../assets/svgs/pet-view/children.svg';
import dogsIcon from '../../assets/svgs/pet-view/dogs.svg';
import catsIcon from '../../assets/svgs/pet-view/cats.svg';

import emailIcon from '../../assets/svgs/pet-view/email.svg';
import phoneIcon from '../../assets/svgs/pet-view/phone.svg';
import addressIcon from '../../assets/svgs/pet-view/address.svg';

function _PetViewPage() {
  const location = useLocation();
  const { id } = useParams();

  const { response, isLoading, error } = useFetch(`animals/${id}`);

  const breadcrumbs = [
    { link: '/', text: 'Home' },
    { link: '/search', text: 'Search Animals' },
    { link: location.state.path, text: 'Results' },
    { link: location.pathname, text: 'Pet' },
  ];

  // organises the address fields into the preferred formatted array. falsey values are filtered before being passed to the details components
  const addressSelector = response && response.animal.contact.address;
  const addressArray = response && [
    addressSelector.address1,
    addressSelector.address2,
    `${addressSelector.city + ','} ${addressSelector.state}`,
    addressSelector.postcode,
  ];

  // if there's no photos, pass on the no image found picture. else, render received images
  let photos = [{ full: noImageFound }];

  if (response && response.animal.photos[0]) {
    photos = response.animal.photos;
  }

  const healthDetails = response && [
    {
      icon: neuteredIcon,
      title: 'Spayed/Neutered',
      text: response.animal.attributes.spayed_neutered,
    },
    {
      icon: houseTrainedIcon,
      title: 'House Trained',
      text: response.animal.attributes.house_trained,
    },
    { icon: declawedIcon, title: 'Declawed', text: response.animal.attributes.declawed },
    {
      icon: specialNeedsIcon,
      title: 'Special Needs',
      text: response.animal.attributes.special_needs,
    },
    { icon: vaccinatedIcon, title: 'Vaccinated', text: response.animal.attributes.shots_current },
  ];

  const livingDetails = response && [
    {
      icon: childrenIcon,
      title: 'Can I live with children?',
      text: response.animal.environment.children,
    },
    { icon: dogsIcon, title: 'Can I live with dogs?', text: response.animal.environment.dogs },
    { icon: catsIcon, title: 'Can I live with cats?', text: response.animal.environment.cats },
  ];

  const contactDetails = response && [
    { icon: emailIcon, title: 'Email', text: response.animal.contact.email },
    { icon: phoneIcon, title: 'Phone Number', text: response.animal.contact.phone },
    {
      icon: addressIcon,
      title: 'Address',
      text: addressArray.filter((line) => line),
    },
  ];

  const petView = response && (
    <>
      <section className={classes.overview}>
        <PetImages photos={photos} />
        <PetInformation
          name={response.animal.name}
          breed={response.animal.breeds.primary}
          age={response.animal.age}
          gender={response.animal.gender}
          location={`${response.animal.contact.address.city}, ${response.animal.contact.address.state}`}
          description={response.animal.description}
          status={response.animal.status}
          updated={response.animal.status_changed_at.slice(0, 10)}
        />
      </section>
      <section className={classes.details}>
        <PetDetails styles={classes.health} title="Health" detailArray={healthDetails} />
        <PetDetails styles={classes.living} title="Living" detailArray={livingDetails} />
        <PetDetails styles={classes.contact} title="Contact" detailArray={contactDetails} />
        <PetAdoption styles={classes.adoption} url={response.animal.url} />
      </section>
    </>
  );

  const loadingView = isLoading && <img className={classes.loading} src={loadingSpinner} alt="" />;

  const errorView = error && (
    <p className={classes.error}>
      Sorry, but this pet could not be found at the moment. Please check back later!
    </p>
  );

  return (
    <>
      <main className={classes.main}>
        {<Breadcrumbs breadcrumbs={breadcrumbs} />}
        {petView}
        {loadingView}
        {errorView}
      </main>
    </>
  );
}

export default _PetViewPage;
