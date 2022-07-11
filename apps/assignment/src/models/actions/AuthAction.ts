import { AuthType } from "src/models/entities/AuthType";

export const AuthAction = (self: AuthType) => ({
  setResetConfig: (resetConfig) => {
    self.resetConfig = resetConfig;
  },
});
