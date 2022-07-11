import { AuthType } from "src/models/entities/AuthType";

export const AuthView = (self: AuthType) => ({
  getResetConfig: () => {
    return self.resetConfig;
  },
});
