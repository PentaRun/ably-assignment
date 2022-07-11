import { Cookies } from "react-cookie";
import dotenv from "dotenv";

dotenv.config();

export const setCookie = (
  key: string,
  value: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: { [key: string]: number | any }
) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 10);
  const cookies = new Cookies();
  cookies.set(key, value, {
    expires: date,
    sameSite: "lax",
    ...options,
  });
};

export const removeCookie = (key: string) => {
  const cookies = new Cookies();
  cookies.remove(key);
};

export const getCookie = (key: string) => {
  const cookies = new Cookies();
  return cookies.get(key);
};
