// this function turns the location from the {city-state} url format to the {city, state} api format
// postcodes are allowed as they are

function urlToAPI(location) {
  let formattedLocation = location;
  if (isNaN(location) && location !== 'global') {
    const loc = location.replaceAll('-', ' ');
    const index = loc.lastIndexOf(' ');
    formattedLocation = loc.substring(0, index) + ', ' + loc.substring(index + 1);
  }

  return formattedLocation;
}

export default urlToAPI;
