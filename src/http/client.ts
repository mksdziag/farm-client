import ky from "ky";

const baseUrl = import.meta.env.PUBLIC_API_URL;
const url = `${baseUrl}/api`;

export const httpClient = ky.create({
  prefixUrl: url,
});
