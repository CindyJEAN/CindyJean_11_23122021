import logements from "./logements.json";

function getAllLocations(){
  return logements;
}

function getLocation(id){
  for ( const location of logements){
    if (location.id === id) return location;
  }
  throw "id not found";
}

export {
  getAllLocations,
  getLocation
};