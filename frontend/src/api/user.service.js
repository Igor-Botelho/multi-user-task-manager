import Axios from "axios";
import Cookies from "js-cookie";

async function creatUser(userData) {
  const { data } = await Axios.post(`/api/creatUser`, userData);

  return data;
}

async function login(userData) {
  const { data } = await Axios.post(`/api/login`, userData);

  Cookies.set("userToken", data.token);

  return data.user;
}

export { creatUser, login };
