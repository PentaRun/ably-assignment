import { AuthAction } from "src/models/actions/AuthAction";
import { AuthProps } from "src/models/entities/AuthType";
import { AuthView } from "src/models/views/AuthView";

export const AuthStore = AuthProps.actions(AuthAction).views(AuthView);

export const defaultData = {
  resetConfig: {
    email: "",
    authCode: "171009",
    remainMillisecond: 0,
    issueToken: "",
    confirmToken: "",
  },
};

export const authStore = AuthStore.create(defaultData);
