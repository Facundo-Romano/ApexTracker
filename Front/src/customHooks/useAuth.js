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
      const res = await userRegister(user, setUser);
      if (res.status === "ok") return res.payload;
      else throw new Error(res.payload);
    }, [setUser]);

  const login = useCallback(
    async (user) => {
      const res = await userLogin(user, setUser);
      if (res.status === "ok") return res.payload.user;
      else throw new Error(res.payload);
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
      throw new Error(err.message);
    }
  }; */
  
  return { ...user, register, login, logout }
};