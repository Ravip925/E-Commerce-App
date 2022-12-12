import axios from "axios";

const BASE_URL = "https://ecommerce-api-ravi.cyclic.app/api/";
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTIxYjFjYjQwNTBjOWI1MmIzMTUxMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDY5MTMwMywiZXhwIjoxNjcwOTUwNTAzfQ.-1TN9o71FTMbna8uPBWO5rAsWlRdVgpwiW1ZXFWDOi4"

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});