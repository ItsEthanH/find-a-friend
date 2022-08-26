// Google's autocomplete API returns the location in a way unsuitable for the Petfinder API
// This function sanitises input to the {city-state} format suitable for a url, which can be formatted to the Petfinder way {city,state} down the line
function formatLocationForURL(mainText, secondaryText = '') {
  let locationName = mainText;

  if (secondaryText.includes(', ')) {
    let index = secondaryText.indexOf(',');
    locationName += `-${secondaryText.slice(0, index)}`;
  }

  const formattedLocation = locationName.toLowerCase().replaceAll(' ', '-');

  return formattedLocation;
}

export default formatLocationForURL;
