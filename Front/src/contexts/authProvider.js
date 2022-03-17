import { useEffect, useState } from "react";
import userGet from "./utils/userGet";
import userReset from "./utils/userReset";
import AuthContext, { initalUser } from "./authContext";

function AuthProvider({ children }) {
  const [user, setUser] = useState({ ...initalUser, firstLoad: true });
  const userGlobalState = { user, setUser };

  useEffect(() => {
    setUser((prev) => {
      return { ...prev, firstLoad: true };
    });
    userGet()
      .then((res) => {
        const user = res.data.payload;
        setUser((prev) => { return { ...prev, user, firstLoad: false }});
      })
      .catch(() => {
        userReset();
        setUser((prev) => { return { ...prev, firstLoad: false }});
      });
  }, []);

  return <AuthContext.Provider value={userGlobalState}>{children}</AuthContext.Provider>;
}

export default AuthProvider;