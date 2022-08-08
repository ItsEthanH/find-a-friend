export default function getCookieValue(name) {
  const cookie = document.cookie;
  const allCookiesArray = cookie.split(';');

  for (const cookiePair of allCookiesArray) {
    const splitCookie = cookiePair.split('=');

    if (splitCookie[0].trim() === name) {
      return splitCookie[1];
    }
  }

  return null;
}
