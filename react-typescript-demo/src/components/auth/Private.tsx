import { Login } from "./Login";
import { ProfileType } from "./Profile";

type PrivateType = {
  isLoggedIn: boolean;
  Component: React.ComponentType<ProfileType>;
};

export const Private = ({ isLoggedIn, Component }: PrivateType) => {
  if (isLoggedIn) return <Component name="vidhya" />;
  else return <Login />;
};
