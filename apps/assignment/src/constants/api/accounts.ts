import dotenv from "dotenv";

dotenv.config();

const BASEURL = "https://ably-frontend-assignment-server.vercel.app/api";

export const LOGIN_URL = `${BASEURL}/login`;

export const LOGOUT_URL = `${BASEURL}/logout`;

export const RESET_REQUEST = `${BASEURL}/reset-password?email=`;

export const RESET_CONFIRM = `${BASEURL}/reset-password`;

export const RESET_CHANGE = `${BASEURL}/reset-password`;

export const PROFILE_URL = `${BASEURL}/user`;
