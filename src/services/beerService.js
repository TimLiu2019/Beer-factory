import http from "./httpService";

const apiEndpoint = "/beers";
export function getBeers() {
  return http.get(apiEndpoint);
}
