import axios from "axios";
import userSet from "./userSet";

const userLogin = async (user, setUser) => {
  setUser((prevUser) => {
    return { ...prevUser, isLoading: true };
  });
  try {
    const { data } = await axios.post("/user/login", user );
    if (data.status === "error") throw new Error(data.payload);
    const token = data.payload.token;
    const userInfo = data.payload.user;
    userSet(token);
    setUser((prevUser) => {
      return { ...prevUser, user: userInfo, isLoading: false };
    });
    return data;
  } catch (err) {
    setUser((prevUser) => {
      return { ...prevUser, isLoading: false };
    });
    return err.payload;
  }
};

export default userLogin;