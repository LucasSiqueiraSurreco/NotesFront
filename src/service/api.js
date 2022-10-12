import axios from "axios";

export const api = axios.create({
  baseURL: "https://notes-backendlcss.herokuapp.com"
});
