import { post } from "src/hooks/apiMethod/post";
import {
  LOGIN_URL,
  LOGOUT_URL,
  PROFILE_URL,
  RESET_REQUEST,
  RESET_CONFIRM,
  RESET_CHANGE,
} from "src/constants/api/accounts";
import { getMethod } from "src/hooks/apiMethod/getMethod";

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return post({
    url: LOGIN_URL,
    body: {
      email,
      password,
    },
  })();
};

export const logout = () => {
  return post({
    url: LOGOUT_URL,
  })();
};

export const resetRequest = ({ email }: { email: string }) =>
  getMethod({
    url: `${RESET_REQUEST}${email}`,
  })();

export const resetConfirm = ({
  email,
  authCode,
  issueToken,
}: {
  email: string;
  authCode: number;
  issueToken: string;
}) => {
  return post({
    url: RESET_CONFIRM,
    body: {
      email,
      authCode,
      issueToken,
    },
  })();
};

export const resetChange = ({
  email,
  confirmToken,
  newPassword,
  newPasswordConfirm,
}: {
  email: string;
  confirmToken: number;
  newPassword: string;
  newPasswordConfirm: string;
}) => {
  return post({
    method: "patch",
    url: RESET_CHANGE,
    body: {
      email,
      confirmToken,
      newPassword,
      newPasswordConfirm,
    },
  })();
};

export const getProfile = () =>
  getMethod({
    url: PROFILE_URL,
  })();
