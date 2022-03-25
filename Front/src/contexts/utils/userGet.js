import axios from "axios";

const userGet = async () => {
  try {
    const token = localStorage.getItem("jwtToken");
    axios.defaults.headers.common["Authorization"] = token;
    if (token) {
      const { data } = await axios.get("/user/get");
      return data.payload;
    }
  } catch (err) {
    return err
  }
};

export default userGet;