import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:3006",
  baseURL: "https://obscure-harbor-20606.herokuapp.com",
});

export default instance;
