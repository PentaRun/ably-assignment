import { AuthContext, useProvideAuth } from "src/hooks/useAuth";

type ProvideType = {
  children: JSX.Element;
};
const ProvideAuth = ({ children }: ProvideType) => {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default ProvideAuth;
