import { AuthStore, authStore } from "src/models/stores/AuthStore";
import { Instance, types } from "mobx-state-tree";

export type RootStoreModel = Instance<typeof RootType>;

export const mapper = ({ authStore }: RootStoreModel) => ({
  authStore,
});

export const RootType = types.model("RootType", {
  authStore: AuthStore,
});

const rootStore = RootType.create({
  authStore,
});

export default rootStore;
