import { AxiosResponse } from "axios";
import { createContext, useContext } from "react";
import { queryClient } from "src/pages/_app";
import { getCookie } from "src/services/utils/cookies";

type AuthContextType = {
  user: () => string;
  userId: () => string;
  signIn: (auth: () => void, check: boolean) => void;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const isAuthenticated = () => {
  let isAuthenticated = false;

  const signIn = (signInFunc: (...args: []) => void, checks: boolean) => {
    const setIsAuth = (check: boolean) => {
      isAuthenticated = check;
    };

    setIsAuth(checks);

    if (isAuthenticated) {
      signInFunc();
    }
  };

  return { signIn };
};

export const useProvideAuth = () => {
  const user = () => getCookie("accessToken");

  const userId = () => {
    return queryClient.getQueryData("userInfo")
      ? (queryClient.getQueryData("userInfo") as AxiosResponse["data"]).id
      : "";
  };
  const signIn = (auth: () => void, isLogin: boolean) => {
    return isAuthenticated().signIn(() => {
      auth();
    }, isLogin);
  };
  return {
    user,
    signIn,
    userId,
  };
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
