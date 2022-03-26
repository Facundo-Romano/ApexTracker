import { useCallback, useContext } from "react";
import AuthContext, { initalUser } from "../contexts/authContext.js";
import userLogin from "../contexts/utils/userLogin.js";
import userRegister from "../contexts/utils/userRegister.js";
import userReset from "../contexts/utils/userReset.js";
/* import userVerify from "../auth/utils/userVerify"; */

export default function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  const register = useCallback(
    async (user) => {
      return await userRegister(user, setUser);
    }, [setUser]);

  const login = useCallback(
    async (user) => {
      return await userLogin(user, setUser);
    }, [setUser]);

  const logout = useCallback(() => {
    setUser(initalUser);
    userReset();
  }, [setUser]);

  /* const verifyMail = async (token) => {
    try {
      const user = await userVerify(token);
      return user;
    } catch (err) {
      return err
    }
  }; */
  
  return { ...user, register, login, logout }
};