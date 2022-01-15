import axios from "axios";
export default function genericRequest(url, method, headers = {}, data = {}) {
  const options = {
    url,
    method,
    headers,
    data
  };
  return axios(options);
}