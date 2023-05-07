import ky from "ky";

const url = "http://localhost:5000/api";

export const httpClient = ky.create({
  prefixUrl: url,
});
