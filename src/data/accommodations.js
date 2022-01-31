import logements from "./logements.json";

/**
 * gets all the accommodations
 *
 * @return  {Array} Accomodations array
 */
function getAllAccommodations(){
  return logements;
}

/**
 * finds the accommodation with the id and returns the info
 *
 * @param   {String}  id
 *
 * @return  {Object}      all info on the accomodation
 */
function getAccommodationById(id){
  for ( const accommodation of logements){
    if (accommodation.id === id) return accommodation;
  }
  throw "id not found";
}

export {
  getAllAccommodations,
  getAccommodationById
};