import { Instance, types } from "mobx-state-tree";

export type AuthType = Instance<typeof AuthProps>;

const resetConfig = types.model({
  email: types.string,
  authCode: types.string,
  issueToken: types.string,
  remainMillisecond: types.number,
  confirmToken: types.string,
});

export const AuthProps = types.model({
  resetConfig,
});
