import http from "./httpService";

const apiEndpoint = "/photos";

export function getPhotos() {
  return http.get(apiEndpoint);
}
