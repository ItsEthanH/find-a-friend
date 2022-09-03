import { useParams, useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import Breadcrumbs from '../../components/text/Breadcrumbs';
import PetImages from './PetImages';
import PetInformation from './PetInformation';
import PetDetails from './PetDetails';
import PetAdoption from './PetAdoption';

import classes from './styles/PetViewPage.module.css';

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

function _PetViewPage(props) {
  const location = useLocation();
  const { id } = useParams();

  const { response, isLoading, error } = useFetch(`animals/${id}`);
  console.log(response);

  // const addressArray = [response.animal];

  const breadcrumbs = [
    { link: '/', text: 'Home' },
    { link: '/search', text: 'Search Animals' },
    { link: '', text: 'Results' },
    { link: location.pathname, text: 'Pet' },
  ];

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
    { icon: phoneIcon, title: 'Phone Number', text: response.animal.attributes.phone },
    {
      icon: addressIcon,
      title: 'Address',
      text: response.animal.contact.address,
    },
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <main className={classes.main}>
        <section className={classes.overview}>
          <PetImages />
          <PetInformation />
        </section>
        <section className={classes.details}>
          <PetDetails title="Health" detailArray={healthDetails} boolean={true} />
          <PetDetails title="Living" detailArray={livingDetails} boolean={true} />
        </section>
        <section className={classes.details}>
          <PetDetails title="Contact" detailArray={contactDetails} />
          <PetAdoption />
        </section>
      </main>
    </>
  );
}

export default _PetViewPage;
