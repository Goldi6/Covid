const axios = require("axios");

const sourceURL = "https://data.gov.il/api/3/action/datastore_search";

async function getAPIData(resource_id, params = {}) {
  var url = sourceURL + `?resource_id=${resource_id}`;
  console.log("fetching data, url...:", url);

  try {
    const response = await axios.get(url, { params: { ...params } }); // Send a GET request to the specified URL
    const data = response.data.result; // Extract the response data

    console.log("Got data...");
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

module.exports = getAPIData;
