import { createContext } from "react";

export const initalUser = {
  user: { id: -1, name: "guest", email: "", role: "guest" },
  isLoading: false,
  firstLoad: false,
};

const AuthContext = createContext(initalUser);

export default AuthContext;