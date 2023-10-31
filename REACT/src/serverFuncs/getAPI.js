import axios from "axios";
import { basePath } from "../config.ts";
axios.defaults.baseURL = basePath;

const covidPath = "/api/covid";
//////////////////!SECTION

export async function getSectionsAPI() {
  try {
    const res = await axios({
      method: "get",
      url: covidPath + "/sections",
    });

    return res.data;
  } catch (err) {
    console.log("Error Object:", err);
  }
}

function replaceNonAlphaNumericWithUnderscore(inputString) {
  return inputString.replace(/[^0-9a-zA-Z]+/g, "_");
}

export async function getAPI(section, name, defaultApiParams = "") {
  const api =
    replaceNonAlphaNumericWithUnderscore(section) +
    "/" +
    replaceNonAlphaNumericWithUnderscore(name);
  try {
    const res = await axios({
      method: "get",
      url: `${covidPath}/${api}?${defaultApiParams ? defaultApiParams : ""}`,
    });
    return res.data;
  } catch (error) {}
}
