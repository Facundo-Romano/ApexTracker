import axios from "axios";

const userRegister = async (user, setUser) => {
  setUser((prevUser) => { return { ...prevUser, isLoading: true } });
  try {
    const { data } = await axios.post("/user/register",  user );
    setUser((prevUser) => { return { ...prevUser, isLoading: false }});
    return data;
  } catch (err) {
    setUser((prevUser) => { return { ...prevUser, isLoading: false }});
    return err
  }
};

export default userRegister;