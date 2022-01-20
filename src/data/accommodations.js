import logements from "./logements.json";

function getAllAccommodations(){
  return logements;
}

function getAccommodation(id){
  for ( const location of logements){
    if (location.id === id) return location;
  }
  throw "id not found";
}

export {
  getAllAccommodations,
  getAccommodation
};