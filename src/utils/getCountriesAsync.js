
// Example server, implemented in Rails: https://git.io/vKHKv
const API = 'https://restcountries.eu/rest/v2/all';

export default (async function getCountriesAsync() {
 
  return fetch(API)
        .then(response => response.json())
        .then(data => console.log(data));
});
