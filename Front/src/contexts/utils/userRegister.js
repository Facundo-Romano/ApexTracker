import axios from "axios";

const userRegister = async (user, setUser) => {
  setUser((prevUser) => {
    return { ...prevUser, isLoading: true };
  });
  try {
    const { data } = await axios.post("/user/register",  user );
    if (data.status === "error") throw new Error(data.payload);
    setUser((prevUser) => { return { ...prevUser, isLoading: false }});
    return data;
  } catch (err) {
    setUser((prevUser) => { return { ...prevUser, isLoading: false }});
    throw new Error(err.payload);
  }
};

export default userRegister;