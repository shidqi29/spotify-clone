import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${process.env.SPOTIFY_WEB_API_ENDPOINT}`,
});
