//initial value of state different from future value
import { useState } from "react";

type authUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<authUser>({} as authUser); // type assertion if we are sure the user will be initialiased soon after setup
  //const [user, setUser] = useState<authUser | null>(null);
  const handleLogin = () => {
    setUser({ name: "Vidhya", email: "vidhya@example.com" });
  };
  const handleLogout = () => {
    //setUser({});
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User email is {user.name}</div>
      <div>User Password is {user.email}</div>
    </div>
  );
};
