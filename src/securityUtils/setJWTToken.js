import axios from "axios";

const setJWTToken = (token) => {
  console.log("token is ");
  console.log(token);
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setJWTToken;
