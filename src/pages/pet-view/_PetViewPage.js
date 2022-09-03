import { useLocation } from 'react-router-dom';

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

  const breadcrumbs = [
    { link: '/', text: 'Home' },
    { link: '/search', text: 'Search Animals' },
    { link: '', text: 'Results' },
    { link: location.pathname, text: 'Pet' },
  ];

  const healthDetails = [
    { icon: neuteredIcon, title: 'Spayed/Neutered', text: 'Yes' },
    { icon: houseTrainedIcon, title: 'House Trained', text: 'Yes' },
    { icon: declawedIcon, title: 'Declawed', text: 'No' },
    { icon: specialNeedsIcon, title: 'Special Needs', text: 'No' },
    { icon: vaccinatedIcon, title: 'Vaccinated', text: 'Yes' },
  ];
  const livingDetails = [
    { icon: childrenIcon, title: 'Can I live with children?', text: 'Yes' },
    { icon: dogsIcon, title: 'Can I live with dogs?', text: 'Yes' },
    { icon: catsIcon, title: 'Can I live with cats?', text: 'No' },
  ];
  const contactDetails = [
    { icon: emailIcon, title: 'Email', text: 'sample-email@gmail.com' },
    { icon: phoneIcon, title: 'Phone Number', text: '555-555-5555' },
    {
      icon: addressIcon,
      title: 'Address',
      text: ['Address Line 1,', 'Address Line 2,', 'City, State', 'Postcode'],
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
          <PetDetails title="Health" detailArray={healthDetails} />
          <PetDetails title="Living" detailArray={livingDetails} />
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
