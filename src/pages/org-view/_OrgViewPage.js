import OrgMap from './OrgMap';
import useFetch from '../../hooks/useFetch';

import OrgInfo from './OrgInfo';

import classes from './styles/OrgViewPage.module.css';
import OrgHours from './OrgHours';
import OrgPets from './OrgPets';

const response = {
  organization: {
    id: 'OR248',
    name: 'Rose City Fox Terrier Rescue, Inc.',
    email: 'info@rosecityfoxterrierrescue.com',
    phone: null,
    address: {
      address1: null,
      address2: null,
      city: 'Portland',
      state: 'OR',
      postcode: '97266',
      country: 'US',
    },
    hours: {
      monday: null,
      tuesday: null,
      wednesday: null,
      thursday: null,
      friday: null,
      saturday: null,
      sunday: null,
    },
    url: 'https://www.petfinder.com/member/us/or/portland/rose-city-fox-terrier-rescue-inc-or248/?referrer_id=84055c70-1fb4-4fdb-a6d9-620ea838de5b',
    website: 'http://www.rosecityfoxterrierrescue.com',
    mission_statement:
      'Rose City Fox Terrier Rescue, Inc. is a Wire Haired Fox Terrier and Smooth Fox Terrier dog rescue based in...',
    adoption: {
      policy: null,
      url: null,
    },
    social_media: {
      facebook: null,
      twitter: null,
      youtube: null,
      instagram: null,
      pinterest: null,
    },
    photos: [
      {
        small:
          'https://dl5zpyw5k3jeb.cloudfront.net/organization-photos/36400/1/?bust=1510521777&width=100',
        medium:
          'https://dl5zpyw5k3jeb.cloudfront.net/organization-photos/36400/1/?bust=1510521777&width=300',
        large:
          'https://dl5zpyw5k3jeb.cloudfront.net/organization-photos/36400/1/?bust=1510521777&width=600',
        full: 'https://dl5zpyw5k3jeb.cloudfront.net/organization-photos/36400/1/?bust=1510521777',
      },
    ],
    distance: null,
    _links: {
      self: {
        href: '/v2/organizations/or248',
      },
      animals: {
        href: '/v2/animals?organization=or248',
      },
    },
  },
};

function _OrgViewPage(props) {
  // const { response, isLoading, error } = useFetch('/organizations/OR248');

  const addressArray = [
    response.organization.address.address1,
    response.organization.address.address2,
    `${response.organization.address.city}, ${response.organization.address.state}`,
    response.organization.address.postcode,
  ].filter((line) => line);

  return (
    <main className={classes.main}>
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
    </main>
  );
}

export default _OrgViewPage;
