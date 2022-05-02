import axiosInstance from "./config";

export const getPokemons = (limit = 151) =>
  axiosInstance
    .get(`/pokemon?limit=${limit}?`)
    .then(({ data }) => data.results)
    .catch(error => console.log(error));
