export const BASE_URL = "http://localhost:4000";


// Map your URLS here
export const entity = {
  GET: `${BASE_URL}/entity`,
};

// this ensures you can do the following in code:

// import ENDPOINTS from './endpoint-constants.js'
// ENDPOINTS.entity.get (yields baseurl/entity in this case)

// if you decide to update the endpoint of your entity to "/entity2" you only have to do it in your constants file.
