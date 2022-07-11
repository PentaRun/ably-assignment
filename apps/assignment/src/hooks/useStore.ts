import { createContext, useContext } from "react";

import { RootStoreModel } from "../models/RootStore";

const StoreContext = createContext<RootStoreModel>({} as RootStoreModel);

// provider로 반환 된 값을 보낸다.
export const StoreProvider = StoreContext.Provider;

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("this value is undefined");
  }
  return context;
};
