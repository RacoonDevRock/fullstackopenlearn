import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";

const getAllCountries = async () => {
  return axios
    .get(`${baseUrl}/all`)
    .then((res) => res.data);
};

const getCountryByName = async (name) => {
  return axios
    .get(`${baseUrl}/name/${name}`)
    .then((res) => res.data);
};

export default {
  getAllCountries,
  getCountryByName,
};
