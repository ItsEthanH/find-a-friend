// to keep urls tidy, spaces are replaces with dashes for the url link
// when the user is redirected, the location is taken from the url and formatted with this function to {city, state} format

function formatLocationForAPI(location) {
  let formattedLocation = location;

  if (location.includes('-')) {
    const spacedUrl = location.replaceAll('-', ' ');
    const lastIndex = spacedUrl.lastIndexOf(' ');
    formattedLocation =
      spacedUrl.substring(0, lastIndex) + ', ' + spacedUrl.substring(lastIndex + 1);
  }

  return formattedLocation;
}

export default formatLocationForAPI;
